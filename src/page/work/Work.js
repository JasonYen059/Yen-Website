import React, { useEffect } from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import workData from "../../workData";
import Project from "../../components/project/Project";
import ProjectDetail from "../../components/project/ProjectDetail";
import SlideIcon from "../../components/slideIcon/SlideIcon";
import SlideDown from "../../components/slideIcon/SlideDown";

const Work = () => {
  let { path, url } = useRouteMatch();
  let test = useRouteMatch();
  console.log(test);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
          initial={{ opacity: 0}}
          animate={{ opacity: 0.7}}
          transition={{ duration: 1 }}
          className="work-title"
        >
          WORK
        </motion.span>

        <SlideDown />
      </div>

      <SlideIcon
        left="/about"
        leftTitle="ABOUT"
        right="/skill"
        rightTitle="SKILL"
      />

      <div className="project-container">
        <Switch>
          <Route exact path={path}>
            {workData.map((data) => {
              return <Project key={data.id} url={url} data={data} />;
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
