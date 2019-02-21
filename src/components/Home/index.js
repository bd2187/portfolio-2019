import React from "react";
import styles from "./Home.css";

const Home = () => {
    return (
        <div className={styles["title-wrap"]}>
            <h1>
                Hi, I'm Brandon! I'm a{" "}
                <span className={styles["off-color-for-text"]}>
                    front-end Javascript developer
                </span>{" "}
                from Los Angeles who is currently working at VS Media.
            </h1>
        </div>
    );
};

export default Home;
