import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        Contact Me <span style={{ fontSize: "80px" }}>&#128236;</span>
      </h2>
      <p style={styles.description}>
        We'd love to hear from you! Feel free to reach out using the form below.
      </p>
      <form style={styles.form}>
        <label htmlFor="name" style={styles.label}>
          Name
        </label>
        <input type="text" id="name" name="name" style={styles.input} />

        <label htmlFor="email" style={styles.label}>
          Email
        </label>
        <input type="email" id="email" name="email" style={styles.input} />

        <label htmlFor="message" style={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          style={styles.textarea}
        ></textarea>

        <button
          type="submit"
          style={styles.submitButton}
          onClick={() => {
            alert("Thank you for your feedback!");
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2em",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontSize: "1em",
    marginBottom: "5px",
    textAlign: "left",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
    resize: "vertical",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
};

export default Contact;
