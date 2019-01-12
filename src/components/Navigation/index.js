import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to="/">
                <h2>Home</h2>
            </Link>
            <Link to="/work">
                <h2>Work</h2>
            </Link>
            <Link to="/about">
                <h2>About me</h2>
            </Link>
            <Link to="/contact">
                <h2>Contact</h2>
            </Link>
        </div>
    );
};

export default Navigation;
