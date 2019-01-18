import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import Work from "../components/Work";
import SoloWork from "../components/Work/SoloWork";
import About from "../components/About";
import Contact from "../components/Contact";

import Navigation from "../components/Navigation";

const routes = (
    <Router>
        <Fragment>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/work/:workTitle" component={SoloWork} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </Fragment>
    </Router>
);

export default routes;
