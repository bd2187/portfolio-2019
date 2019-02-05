import React, { Fragment } from "react";
import styles from "./Contact.css";

const contactData = [
    {
        text: "brandon.dionisio.26@gmail.com",
        link: "mailto:brandon.dionisio.26@gmail.com",
        type: "email",
        icon: "far fa-envelope"
    },

    {
        text: "github.com/bd2187/",
        link: "https://www.github.com/bd2187/",
        type: "website",
        icon: "fab fa-github"
    },

    {
        text: "linkedin.com/in/bd2187/",
        link: "https://www.linkedin.com/in/bd2187/",
        type: "website",
        icon: "fab fa-linkedin-in"
    }
];

const ContactItem = ({ text, link, type, icon }) => {
    var openInNewTab = type === "website" ? "_blank" : "";
    return (
        <li>
            <div className={styles["contact-inner-container"]}>
                <a
                    className={styles["contact-icon"]}
                    href={link}
                    target={openInNewTab}
                >
                    <i className={icon} />
                </a>
                <a
                    className={styles["contact-link"]}
                    href={link}
                    target={openInNewTab}
                >
                    {text}
                </a>
            </div>
        </li>
    );
};

const Contact = () => {
    return (
        <Fragment>
            <div className={styles["contact-container-wrap"]}>
                <ul className={styles["contact-container"]}>
                    {contactData.map(item => (
                        <ContactItem
                            key={item.text}
                            text={item.text}
                            link={item.link}
                            type={item.type}
                            icon={item.icon}
                        />
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Contact;
