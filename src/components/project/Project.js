import React, { useEffect } from "react";
import "./Project.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsLink } from "react-icons/bs";
import {Link} from "react-router-dom";

const Project = ({ data,url }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="project">
      <div className="img-container">
        <Link to={`${url}/${data.id}`} className="img-link">
        <img src={data.img} alt={data.name} className="projectimg" />
        </Link>
      </div>
      <div className="text-container">
        <div className="text-title">
          <h1 className="project-name">{data.name}</h1>
          <h2 className="project-type">{data.type}</h2>
        </div>
        <div className="context">
          <span className="project-describe">{data.describe}</span>
          <a className="project-link" href={data.url}>
            <BsLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
