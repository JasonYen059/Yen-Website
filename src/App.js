import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Work from "./page/work/Work";
import Skill from "./page/skill/Skill";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/skill">
            <Skill />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
