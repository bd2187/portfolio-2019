import React from "react";
import styles from "./Footer.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>&copy; Brandon Dionisio {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;
