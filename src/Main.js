import React from 'react';
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import {Switch, Route} from "react-router-dom";
import Features from "./Features";
import Contact from "./Contact";

function Main(props) {
    return (
        <div className="container">
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/features">
                    <Features />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>

            <Footer />
        </div>
    );
}

export default Main;