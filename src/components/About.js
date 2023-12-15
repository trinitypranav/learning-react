import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
    borderRadius: "8px",
    backgroundColor: "rgb(248, 245, 245)",
  };

  const headingStyle = {
    color: "#333",
    fontSize: "2rem",
    // marginBottom: "50px",
  };

  const paragraphStyle = {
    color: "#666",
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "50px",
  };

  return (
    <div data-testid="about" className="about-us" style={containerStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>
        Hey <span style={{ fontSize: "50px" }}>&#128075;</span>, Welcome to Eat
        Villa project! This is just an attempt to make a clone of food delivery
        apps like Swiggy and Zomato. It was developed using ReactJS.
      </p>
      <p style={paragraphStyle}>
        Thank you for checking this website. Please let me know if you have any
        suggestions. you can contact me using <Link to="/contact"> here</Link>
      </p>
    </div>
  );
};

export default About;
