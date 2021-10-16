import React, { useEffect } from "react";
import "./Project.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom";
import { AiOutlineSwapRight } from "react-icons/ai";

const Project = ({ data,url }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="project">
      <div className="img-container">
        <div className="img-div">
        <img src={data.img} alt={data.name} className="projectimg" />
        </div>
      </div>
      <div className="text-container">
        <div className="text-title">
          <h1 className="project-name">{data.name}</h1>
          <h2 className="project-type">{data.type}</h2>
        </div>
        <div className="context">
          <div className="describe-div"> 
          <span className="project-describe">{data.describe}</span>
          </div>
          <Link to={`${url}/${data.id}`} className="project-link" href={data.url}>
            READ MORE 
            <span>
            <AiOutlineSwapRight/>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
