import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Switch from "./components/common/Switch";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

// Scenes
import Header from "./scenes/Header";
import Intro from "./scenes/Intro";
import Service from "./scenes/Service";
import Tech from "./scenes/Tech";
import Portfolio from "./scenes/Portfolio";
import Portfolio1 from "./scenes/portfolios/1.js";
import Portfolio2 from "./scenes/portfolios/2.js";
import Portfolio3 from "./scenes/portfolios/3.js";
import Portfolio4 from "./scenes/portfolios/4.js";
import Portfolio5 from "./scenes/portfolios/5.js";
import Portfolio6 from "./scenes/portfolios/6.js";
import Portfolio7 from "./scenes/portfolios/7.js";
import Portfolio8 from "./scenes/portfolios/8.js";
import Testimonial from "./scenes/Testimonial";
import Contact from "./scenes/Contact";

// Components
import Error404 from "./components/common/Error404";
import RedirectAs404 from "./components/common/RedirectAs404";

const Root = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Intro} />
                <Route path="/intro" component={Intro} />
                <Route path="/service" component={Service} />
                <Route path="/tech" component={Tech} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/portfolio-1" component={Portfolio1} />
                <Route path="/portfolio-2" component={Portfolio2} />
                <Route path="/portfolio-3" component={Portfolio3} />
                <Route path="/portfolio-4" component={Portfolio4} />
                <Route path="/portfolio-5" component={Portfolio5} />
                <Route path="/portfolio-6" component={Portfolio6} />
                <Route path="/portfolio-7" component={Portfolio7} />
                <Route path="/portfolio-8" component={Portfolio8} />
                <Route path="/testimonial" component={Testimonial} />
                <Route path="/contact" component={Contact} />
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );
};

ReactDOM.render(
    <HashRouter>
        <div>
            <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <Root />)} />
        </div>
    </HashRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
