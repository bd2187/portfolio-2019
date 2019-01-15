import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.css";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        this.onHamburgerClicked = this.onHamburgerClicked.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    onHamburgerClicked() {
        this.setState(state => ({ isNavOpen: !state.isNavOpen }));
    }

    closeNav() {
        this.setState({ isNavOpen: false });
    }

    render() {
        const isNavOpen = this.state.isNavOpen;
        return (
            <Fragment>
                <div
                    className={styles["fixed-header"]}
                    onClick={this.onHamburgerClicked}
                >
                    <div className={styles["hamburger-menu"]}>burger</div>
                </div>
                <div
                    className={`${styles["navigation-menu"]} ${
                        isNavOpen ? styles["nav-open"] : styles["nav-closed"]
                    }`}
                >
                    <Link to="/" onClick={this.closeNav}>
                        <h2 className={styles["nav-option"]}>Home</h2>
                    </Link>
                    <Link to="/work" onClick={this.closeNav}>
                        <h2 className={styles["nav-option"]}>Work</h2>
                    </Link>
                    <Link to="/about" onClick={this.closeNav}>
                        <h2 className={styles["nav-option"]}>About me</h2>
                    </Link>
                    <Link to="/contact" onClick={this.closeNav}>
                        <h2 className={styles["nav-option"]}>Contact</h2>
                    </Link>
                </div>
            </Fragment>
        );
    }
}

export default Navigation;
