import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const ContactForm = () => {
  const containerStyle = {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: 'var(--contact-bg)',
    color: 'var(--contact-text)',
    animation: 'fadeIn 1.5s ease-in-out',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: 'var(--main-text)',
  };

  const pillScrollStyle = {
    display: 'flex',
    overflowX: 'auto',
    gap: '1rem',
    padding: '1rem 0',
    justifyContent: 'center',
    scrollBehavior: 'smooth',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  };

  const pillStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'var(--pill-bg)',
    padding: '12px 20px',
    borderRadius: '999px',
    fontWeight: '600',
    color: 'var(--pill-text)',
    textDecoration: 'none',
    boxShadow: 'var(--pill-shadow)',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--pill-hover-bg)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--pill-bg)';
    e.currentTarget.style.transform = 'translateY(0px)';
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0px); }
          }

          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <h2 style={headingStyle}>Contact</h2>
      <div style={pillScrollStyle}>
        <a
          href="mailto:sandeshhr334@gmail.com"
          style={pillStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaEnvelope /> sandeshhr334@gmail.com
        </a>

        <a
          href="tel:8951377046"
          style={pillStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaPhoneAlt /> 8951377046
        </a>

        <a
          href="https://www.linkedin.com/in/sandesh-hr-32262a220/"
          style={pillStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn Profile
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
