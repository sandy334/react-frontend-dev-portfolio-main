import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false, hoverResume: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  toggleHover = (hover) => {
    this.setState({ hoverResume: hover });
  };

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();

      var resume = {
        url: "https://drive.google.com/file/d/1BwnVkW7Yr1cWuv8gwUlnDaIKVf2S6y7l/view?usp=sharing",
        fileName: "resume.pdf"
      };
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return <Typical className="title-styles" steps={this.titles} loop={50} />;
      },
      (props, prevProp) => true
    );

    // Combine base and hover styles
    const resumeBtnStyle = this.state.hoverResume
      ? { ...styles.topRightButton, ...styles.topRightButtonHover }
      : styles.topRightButton;

    return (
      <header
        id="home"
        style={{
          height: window.innerHeight - 140,
          display: "block",
          position: "relative",
        }}
      >
        {resume && (
          <a
            href={resume.url}
            download={resume.fileName}
            target="_blank"
            rel="noopener noreferrer"
            style={resumeBtnStyle}
            onMouseEnter={() => this.toggleHover(true)}
            onMouseLeave={() => this.toggleHover(false)}
          >
            📄 Download Resume
          </a>
        )}

        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
              ></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>

              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

const styles = {
  topRightButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: "12px 30px",
    borderRadius: "30px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    color: "#000000",
    fontWeight: "700",
    fontSize: "16px",
    textDecoration: "none",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    zIndex: 1000,
    userSelect: "none",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  topRightButtonHover: {
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-2px)",
  },
};
