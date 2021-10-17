import React from "react";
import "./Project.scss";
import {Link} from "react-router-dom";
import { AiOutlineSwapRight } from "react-icons/ai";

const Project = ({ data,url }) => {
  
  return (
    <div  className="project">
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
            <span className="readmore">READ MORE</span>
            <span className="link-icon">
            <AiOutlineSwapRight/>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
