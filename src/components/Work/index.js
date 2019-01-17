import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import workCollection from "../../config/work";

var renderWorkItem = item => {
    // return <li key={item.title}>{item.title}</li>;

    return (
        <li key={item.seoTitle}>
            <Link to={`work/${item.seoTitle}`}>{item.title}</Link>
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
            <h1>Professional</h1>
            <ul>{professionalWork.map(renderWorkItem)}</ul>

            <h1>Personal</h1>
            <ul>{personalWork.map(renderWorkItem)}</ul>
        </Fragment>
    );
};

export default Work;
