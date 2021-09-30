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
        <h1 className="text-title">{data.name}{data.type}</h1>
        <h1 className="text-content">{data.describe}<br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus a nunc vitae tincidunt. Donec in nisl id sapien hendrerit laoreet ac a nulla. Mauris rhoncus luctus orci, pharetra imperdiet dui aliquet quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus diam sapien, imperdiet in enim vel, placerat facilisis erat. Vestibulum in viverra orci, vel congue sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce hendrerit ultricies mi non fringilla. Integer dapibus finibus lectus id molestie. Morbi ac sem tortor. Nullam eros purus, pretium cursus varius ac, fringilla quis risus. Ut euismod dolor in tortor sollicitudin rhoncus. Quisque feugiat pharetra consequat.</h1>
        <Link to="/work" className="close">B A C K</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
