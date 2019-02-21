import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Work.css";
import workCollection from "../../config/work";

function displayShortDescription(text) {
    var textArr = text.split("");
    var maxCharacters = 90;

    if (textArr.length > maxCharacters) {
        return textArr.slice(0, maxCharacters).join("") + "...";
    } else {
        return text;
    }
}

var renderWorkItem = item => {
    return (
        <li key={item.seoTitle} className={styles["project-thumbnail"]}>
            <Link
                to={`/work/${item.seoTitle}`}
                className={styles["project-link"]}
            >
                <div className={styles["project-img-container"]}>
                    <img src={require(`../../public/images/${item.img}`)} />
                </div>
                <div className={styles["project-info-container"]}>
                    <h4 className={styles["project-title"]}>{item.title}</h4>
                    <p className={styles["project-description"]}>
                        {displayShortDescription(item.description)}
                    </p>
                </div>
            </Link>
        </li>
    );
};

const Work = () => {
    var professionalWork = [];
    var personalWork = [];

    workCollection.forEach(work => {
        work.professional
            ? (professionalWork = [...professionalWork, work])
            : (personalWork = [...personalWork, work]);
    });

    return (
        <Fragment>
            <h1 className={styles["category-title"]}>Professional</h1>
            <ul className={styles["thumbnails-container"]}>
                {professionalWork.map(renderWorkItem)}
            </ul>

            <h1 className={styles["category-title"]}>Personal</h1>
            <ul className={styles["thumbnails-container"]}>
                {personalWork.map(renderWorkItem)}
            </ul>
        </Fragment>
    );
};

export default Work;
