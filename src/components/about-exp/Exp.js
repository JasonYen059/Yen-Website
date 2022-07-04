import React from "react";
import "./Exp.scss";

const Exp = () => {
  return (
    <div className="exp-container">
      <div className="exp-title">
        <h1 className="title-text">EDUCATION</h1>
        <span className="splitline"></span>
      </div>
      <div className="exp-content">
        <div className="content-container">
          <div className="content-top">大同大學 工業設計研究所</div>
          <div className="content-bottom">
            <span>UI 設計、產品設計、互動設計、人因設計</span>
            <span>論文 : 鼓棒之人因設計探討</span>
          </div>
        </div>
        <div className="content-container">
          <div className="content-top">淡江大學 化學工程學系</div>
          <div className="content-bottom">
            <span>化學及材料工程相關知識 </span>
          </div>
        </div>
      </div>

      <div className="exp-title">
        <h1 className="title-text">EXPERIENCE</h1>
        <span className="splitline"></span>
      </div>
      <div className="exp-content">
        <div className="content-container">
          <div className="content-top">
            2022 台北共居研究指南 - 雙北地區青年租屋生存攻略｜相信世代 x IVC
          </div>
          <div className="content-bottom">
            <span>前端開發</span>
            <span>動態圖表、RWD 、製作問卷網站</span>
          </div>
        </div>
        <div className="content-container">
          <div className="content-top">2017 晉江海峽兩岸設計營</div>
          <div className="content-bottom">
            <span>企業實習 - 三斯達、信泰</span>
            <span>參與紡織鞋類設計構想，幼兒產品、LOGO設計</span>
          </div>
        </div>
        <div className="content-container">
          <div className="content-top">2017 智慧生活三創競賽</div>
          <div className="content-bottom">
            <span>車門開啟安全警示裝置</span>
          </div>
        </div>
        <div className="content-container">
          <div className="content-top">2016 台北歐洲學校 Maker Day</div>
          <div className="content-bottom">
            <span>利用Arduino將互動設計帶入課程</span>
            <span>工作營課程規劃與作品實做</span>
          </div>
        </div>
        <div className="content-container">
          <div className="content-top">2016 日本京都文化設計工作營</div>
          <div className="content-bottom">
            <span>與日本當地學生合作與交流</span>
            <span>透過色彩與材質，展現京都的特色</span>
          </div>
        </div>
        <div className="content-container">
          <div className="content-top">2016 智創聯盟成果發表</div>
          <div className="content-bottom">
            <span>機場商品智慧櫥窗</span>
          </div>
        </div>
      </div>

      <div className="exp-title">
        <h1 className="title-text">WORK</h1>
        <span className="splitline"></span>
      </div>
      <div className="exp-content">
        <div className="content-container">
          <div className="content-top">景承科技股份有限公司</div>
          <div className="content-bottom">
            <span>前端工程師</span>
            <span>開發金融業行動帳單、後台管理系統</span>
          </div>
        </div>
        <div className="content-container">
          <div className="content-top">REACT JS 專案</div>
          <div className="content-bottom">
            <span>wpg大聯大控股 中秋賀卡App</span>
          </div>
        </div>
        <div className="content-container">
          <div className="content-top">漢略廣告創意有限公司</div>
          <div className="content-bottom">
            <span>製作物設計、2D / 3D 圖面設計</span>
            <span>活動企劃與執行、團隊溝通</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
