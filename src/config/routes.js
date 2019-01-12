import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";

const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>
);

export default routes;
