import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Nav() {
  return (
    <nav style={styles.nav}>
      <Logo />
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/booking" style={styles.link}>Reservations</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/menu" style={styles.link}>Menu</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#f4ce14", // لون شبيه بلوت ليمن
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  }
};

export default Nav;