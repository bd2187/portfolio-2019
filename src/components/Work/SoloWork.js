import React, { Component } from "react";
import workCollection from "../../config/work";
import { Link } from "react-router-dom";

import styles from "./Work.css";

const AdultDisclaimerModal = ({ linkToVisit, closeDisclaimer }) => {
    return (
        <div>
            <p>
                Warning: The site you are about to visit contains adult content.
                You must be at least 18 years old to visit this site.{" "}
            </p>
            <div>
                <p>Are you sure you want to visit this site?</p>
                <div>
                    <a href={linkToVisit} target="_blank">
                        Yes
                    </a>
                    <button onClick={closeDisclaimer}>No</button>
                </div>
            </div>
        </div>
    );
};

class SoloWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderAdultDisclaimer: false
        };

        this.adultDisclaimer = this.adultDisclaimer.bind(this);
        this.closeAdultDisclaimer = this.closeAdultDisclaimer.bind(this);
    }

    adultDisclaimer(e, title) {
        if (title.toLowerCase() === "flirt4free") {
            e.preventDefault();
            this.setState({ renderAdultDisclaimer: true });
        }
    }

    closeAdultDisclaimer() {
        this.setState({ renderAdultDisclaimer: false });
    }

    render() {
        var projectTitleFromUrl = this.props.match.params.workTitle;

        var workInfo = workCollection.filter(function(workObject) {
            return workObject.seoTitle.toLowerCase() ===
                projectTitleFromUrl.toLowerCase()
                ? workObject
                : null;
        })[0];

        const { title, link, github } = workInfo;

        if (!workInfo) {
            return <h1>Could not find project</h1>;
        }

        // Render data here
        return (
            <div className={styles["solo-project-container"]}>
                <h1 className={styles["project-title"]}>{title}</h1>
                <div className={styles["project-content-container"]}>
                    <p className={styles["project-description"]}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.{" "}
                    </p>
                    <img
                        className={styles["project-gif"]}
                        src="https://media.giphy.com/media/14mcdRwHEgEG3u/giphy.gif"
                    />
                </div>
                <div className={styles["project-links"]}>
                    {github ? (
                        <a href={github} target="_blank">
                            View Code
                        </a>
                    ) : null}

                    <a
                        href={link}
                        target="_blank"
                        onClick={e => this.adultDisclaimer(e, title)}
                    >
                        View Website
                    </a>
                </div>
                <Link to="/work" className={styles["view-more-projects"]}>
                    <i className="fa fa-arrow-left" aria-hidden="true" />
                    View more projects
                </Link>

                {this.state.renderAdultDisclaimer ? (
                    <AdultDisclaimerModal
                        linkToVisit={link}
                        closeDisclaimer={this.closeAdultDisclaimer}
                    />
                ) : null}
            </div>
        );
    }
}

export default SoloWork;
