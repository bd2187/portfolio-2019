import React from "react";

import routes from "../config/routes";
import Wrapper from "./Wrapper";
import Navigation from "./Navigation";

const App = () => {
    return (
        <Wrapper>
            <Navigation />
            {routes}
        </Wrapper>
    );
};

export default App;
