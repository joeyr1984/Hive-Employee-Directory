import React from "react";
import "../styles/Navbar.css";



const styles = {
  navbarStyle: {
    background: "white",
    justifyContent: "center"
    
  },
  logoStyle: {
    height: 100
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <img style={styles.logoStyle}src="./images/hive-logo.svg" alt="logo for Hive Employee directory"></img>
    </nav>
  );
}

export default Navbar;
