import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => {
    return (
        <h1>
            Hi, I'm Brandon! I'm a front-end developer from Los Angeles.
            Currently working at VS Media to build awesome things.
        </h1>
    );
};

const Work = () => {
    return <h1>Work</h1>;
};

const About = () => {
    return <h1>About</h1>;
};

const Contact = () => {
    return <h1>Contact</h1>;
};

const Navigation = () => {
    return (
        <div>
            <h2>Home</h2>
            <h2>Work</h2>
            <h2>About Me</h2>
            <h2>Contact</h2>
        </div>
    );
};

const Wrapper = props => {
    return <div className="main-wrapper">{props.children}</div>;
};

const App = () => {
    return (
        <Wrapper>
            <Navigation />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/work" component={Work} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router>
        </Wrapper>
    );
};

export default App;
