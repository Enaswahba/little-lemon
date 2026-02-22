import React from "react";

function CallToAction() {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Experience the Taste of Little Lemon</h2>
      <p style={styles.text}>
        Book a table now and enjoy our chef’s special dishes!
      </p>
      <button style={styles.button}>Reserve Now</button>
    </section>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "32px",
    color: "#333",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
  },
  button: {
    fontSize: "16px",
    padding: "10px 20px",
    backgroundColor: "#f4ce14",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CallToAction;