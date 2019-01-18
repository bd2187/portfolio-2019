import React from "react";
import workCollection from "../../config/work";

const SoloWork = props => {
    var projectTitleFromUrl = props.match.params.workTitle;

    var workInfo = workCollection.filter(function(workObject) {
        return workObject.seoTitle.toLowerCase() ===
            projectTitleFromUrl.toLowerCase()
            ? workObject
            : null;
    })[0];

    if (!workInfo) {
        return <h1>Could not find project</h1>;
    }

    // Render data here
    return <h1>Solo Work</h1>;
};

export default SoloWork;
