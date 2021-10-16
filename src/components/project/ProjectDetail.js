import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import workData from "../../workData";
import "./ProjectDetail.scss";

const ProjectDetail = () => {
  const [data, setData] = useState([]);
  const [detailImg, setDetailImg] = useState([]);
  let { Id } = useParams();

  useEffect(() => {
    const newData = workData.filter((data) => data.id === +Id);
    setData(newData[0]);
    setDetailImg(newData[0].detailImg);
    console.log(newData);
  }, [Id]);

  return (
    <div className="detail-container">
      {detailImg.map((Img) => {
        return (
          <img
            className="detail-img"
            src={Img.img}
            alt={Img.num}
            key={Img.num}
          />
        );
      })}
      <div className="detail-text-container">
        <h1 className="text-title">
          {data.name}
          {data.type}
        </h1>
        <div className="text-content">
          <span className="describe">{data.contents}</span>
          <div className="frontend-usage">
            <span className="frontend-title">Front-End :</span>
            <span className="frontend-text">{data.frontend}</span>
          </div>
        </div>
        <div className="text-link-container">
          <a className="close" href={data.url}>
            DEMO
          </a>
          <Link to="/work" className="close">
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
