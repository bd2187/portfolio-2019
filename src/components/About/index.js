import React, { Fragment } from "react";
import styles from "./About.css";

const Skills = () => {
    return (
        <Fragment>
            <h1 className={styles["category-title"]}>Skills</h1>
            <ul className={styles["skills-container"]}>
                <li>
                    <img
                        className={styles["skills-icon"]}
                        src={require(`../../public/icons/javascript.svg`)}
                    />
                    <h4>Javascript</h4>
                </li>
                <li>
                    <img
                        className={styles["skills-icon"]}
                        src={require(`../../public/icons/react.svg`)}
                    />
                    <h4>React</h4>
                </li>
                <li>
                    <img
                        className={styles["skills-icon"]}
                        src={require(`../../public/icons/redux.svg`)}
                        style={{ maxWidth: "85px" }}
                    />
                    <h4>Redux</h4>
                </li>
                <li>
                    <img
                        className={styles["skills-icon"]}
                        src={require(`../../public/icons/jquery.svg`)}
                        style={{ maxWidth: "85px" }}
                    />
                    <h4>jQuery</h4>
                </li>
                <li>
                    <img
                        className={styles["skills-icon"]}
                        src={require(`../../public/icons/css3.svg`)}
                        style={{ maxWidth: "85px" }}
                    />
                    <h4>CSS3</h4>
                </li>
                <li>
                    <img
                        className={styles["skills-icon"]}
                        src={require(`../../public/icons/sass.svg`)}
                    />
                    <h4>SASS</h4>
                </li>
                <li>
                    <img
                        className={styles["skills-icon"]}
                        src={require(`../../public/icons/bootstrap.svg`)}
                        style={{ maxWidth: "75px" }}
                    />
                    <h4>Bootstrap</h4>
                </li>
                <li>
                    <img
                        className={styles["skills-icon"]}
                        src={require(`../../public/icons/webpack.png`)}
                        // style={{ marginLeft: "-15px" }}
                    />
                    <h4>Node.js</h4>
                </li>
                <li>
                    <img
                        className={styles["skills-icon"]}
                        src={require(`../../public/icons/github.svg`)}
                        style={{ maxWidth: "85px" }}
                    />
                    <h4>Git / Github</h4>
                </li>
                <li>
                    <img
                        className={styles["skills-icon"]}
                        src={require(`../../public/icons/node.png`)}
                        style={{ marginLeft: "-15px" }}
                    />
                    <h4>Node.js</h4>
                </li>
            </ul>
        </Fragment>
    );
};
const About = () => {
    return (
        <Fragment>
            <h1 className={styles["category-title"]}>About</h1>
            <p className={styles["paragraph-container"]}>
                Hi! I'm Brandon, a Front End Developer currently working at VS
                Media. My interests include Javascript, React, Redux, Node.js.
            </p>

            <p className={styles["paragraph-container"]}>
                Other facts about me: I love to learn-- learning new ways to
                improve code and build & maintain user interfaces.
            </p>

            <Skills />
        </Fragment>
    );
};

export default About;
