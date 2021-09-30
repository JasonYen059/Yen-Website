import React from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import { Switch,Route,Link,useRouteMatch } from "react-router-dom";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import workData from "../../../workData";
import Project from "../../project/Project";
import ProjectDetail from "../../project/ProjectDetail";

const Work = () => {

  let { path, url } = useRouteMatch();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="work-container"
    >
      <div className="title-container">
        <motion.span
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 0.3, x: "-3vw" }}
          transition={{ duration: 0.5 }}
          className="work-title"
        >
          WORK
        </motion.span>
      </div>

      <div className="icon-container">
        <motion.div whileHover={{ scale: 1.1 }} className="icon-div">
          <Link to="/about" className="link">
            <BsChevronCompactLeft className="icon" />
            <span className="icon-font">ABOUT</span>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="icon-div">
          <Link to="/" className="link">
            <span className="icon-font">SKILL</span>
            <BsChevronCompactRight className="icon" />
          </Link>
        </motion.div>
      </div>

      <div className="project-container">
        <Switch>
        <Route exact path={path}>
        {workData.map((data) => {
          return (
           <Project key={data.id} url={url} data={data}/>
          );
        })}
        </Route>
        <Route path={`${path}/:Id`}>
          <ProjectDetail />
        </Route>
        </Switch>
      </div>
    </motion.div>
  );
};

export default Work;
