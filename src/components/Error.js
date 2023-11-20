import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Oops! The page you are looking for might be in another castle.
      </p>
      <p style={styles.suggestion}>
        Go back to <Link to="/">home</Link>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
  },
  heading: {
    fontSize: "2em",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1.2em",
    marginBottom: "20px",
  },
  suggestion: {
    fontSize: "1em",
  },
};

export default Error;
