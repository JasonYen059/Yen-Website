import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./components/page/home/Home";
import About from "./components/page/about/About";
import Work from "./components/page/work/Work";

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
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
