require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/send-email", async (req, res) => {
  const { user_name, user_email, message } = req.body;

  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Change if using another email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "your-email@example.com", // Change this to your receiving email
    subject: `New Message from ${user_name}`,
    text: `Name: ${user_name}\nEmail: ${user_email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Email failed to send", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
