import React, { Fragment } from "react";

import routes from "../config/routes";
import Wrapper from "./Wrapper";
import Footer from "./Footer";

const App = () => {
    return (
        <Fragment>
            <Wrapper>{routes}</Wrapper>
            <Footer />
        </Fragment>
    );
};

export default App;
