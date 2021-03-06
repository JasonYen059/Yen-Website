import colivingLogo from "./img/coliving_logo.jpg";
import covidLogo from "./img/covid_logo.png";
import mooncakeLogo from "./img/mooncake_logo.png";
import motorLogo from "./img/motor_logo.png";
import musicLogo from "./img/music_logo.png";
import weatherLogo from "./img/weather_logo.png";
import hsrLogo from "./img/hsr_logo.png";

import {
  COLIVING1,
  COLIVING2,
  COLIVING3,
  COLIVING4,
} from "./img/coliving/coliving";
import { COVID1, COVID2 } from "./img/covid/covidImg";
import {
  MOONCAKE1,
  MOONCAKE2,
  MOONCAKE3,
  MOONCAKE4,
} from "./img/moocake/mooncake";
import { MOTOR1, MOTOR2, MOTOR3, MOTOR4, MOTOR5 } from "./img/motor/motor";
import { MUSIC1, MUSIC2, MUSIC3 } from "./img/music/music";
import { WEATHER1, WEATHER2 } from "./img/weather/weather";
import { THSRC1, THSRC2, THSRC3 } from "./img/thsrc/thsrc";

const workData = [
  {
    id: 0,
    name: "台北共居研究指南",
    img: colivingLogo,
    describe: "透過視覺化的設計，呈現台北共居研究的成果 ",
    contents:
      "運用動態圖表，清晰的表達數據與重點，配合頁面滾動，產生不同資料的區別，更能清楚比較差異。RWD 設計，在不同裝置皆能輕鬆讀取資訊。畫面拖曳Bar，比較共居空間差異性，製作問卷網站，統計所有問卷資料，並於頁面中呈現",
    frontend: "Vue.js、Vuex、scrollbar 滾動動畫、apexChart、API 串接問卷結果",
    url: "https://sdgscolivingguide.org/#/",
    type: "WEB_APP",
    detailImg: [
      { num: 1, img: COLIVING1 },
      { num: 2, img: COLIVING2 },
      { num: 3, img: COLIVING3 },
      { num: 4, img: COLIVING4 },
    ],
  },
  {
    id: 1,
    name: "COVID19",
    img: covidLogo,
    describe: "用於查看所在地以及全國新冠肺炎疫情 ",
    contents:
      "因新冠肺炎疫情嚴重，故希望做一個可以方便查找疫情相關資訊以及新聞的作品，減少觀看疫情相關資訊以及重點新聞的時間。",
    frontend:
      "Vue.js、Vue-Router、Vuex ， 串接 Google map API，API資料介接、切版、頁面響應、資料渲染、與後端協同開發。",
    url: "https://covid19.mouthird.com/#/",
    type: "APP",
    detailImg: [
      { num: 1, img: COVID1 },
      { num: 2, img: COVID2 },
    ],
  },

  {
    id: 2,
    name: "MOONCAKE",
    img: mooncakeLogo,
    describe: "大聯大控股 企業中秋賀卡製作",
    contents:
      "隨著中秋時節的到來，企業發送數位中秋賀卡，結合互動小遊戲以及企業吉祥物，以更生動有趣的方式祝賀中秋節快樂。",
    frontend: "React.js、React-hooks、切版、頁面響應、與後端協同開發。",
    url: "https://www.wpgmooncake.com/",
    type: "WEB_APP",
    detailImg: [
      { num: 1, img: MOONCAKE1 },
      { num: 2, img: MOONCAKE2 },
      { num: 3, img: MOONCAKE3 },
      { num: 4, img: MOONCAKE4 },
    ],
  },
  {
    id: 3,
    name: "MOTOR",
    img: motorLogo,
    describe: "客製檔車工作室網站設計",
    contents:
      "在台灣受到法規的限制，導致手工檔車文化發展侷限，也較為不普及，由於本身為手工檔車愛好者，希望藉由網站及互動遊戲，讓更多人了解檔車文化。",
    frontend: "Vue.js、Vue-Router、svg 操作、切版、頁面響應、資料渲染。",
    url: "https://jasonyen059.github.io/Yenmotor/#/",
    type: "WEB",
    detailImg: [
      { num: 1, img: MOTOR1 },
      { num: 2, img: MOTOR2 },
      { num: 3, img: MOTOR3 },
      { num: 4, img: MOTOR4 },
      { num: 5, img: MOTOR5 },
    ],
  },

  {
    id: 4,
    name: "MUSICPLAYER",
    img: musicLogo,
    describe: "復古音樂播放APP",
    contents:
      "現代社會流行復古的元素，黑膠唱片更是經典的產品，將黑膠唱片視覺化，製成數位音樂播放器。",
    frontend: "JavaScript、Html、Css",
    url: "https://jasonyen059.github.io/Clock/",
    type: "WEB",
    detailImg: [
      { num: 1, img: MUSIC1 },
      { num: 2, img: MUSIC2 },
      { num: 3, img: MUSIC3 },
    ],
  },

  {
    id: 5,
    name: "WEATHER",
    img: weatherLogo,
    describe: "查詢台灣各縣市一週天氣狀況",
    contents:
      "使用台灣中央氣象局的開源 API，將各縣市一週氣象狀況以圖像呈現，根據資訊有相對的動畫，讓使用者更輕易讀取天氣預報。",
    frontend: "JavaScript、Html、Css，API資料介接、切版、資料渲染。",
    url: "https://jasonyen059.github.io/weatherApp/",
    type: "APP",
    detailImg: [
      { num: 1, img: WEATHER1 },
      { num: 2, img: WEATHER2 },
    ],
  },

  {
    id: 6,
    name: "THSRC",
    img: hsrLogo,
    describe: "查詢台灣高鐵班次及票價",
    contents:
      "使用台灣高鐵 API ，依照台灣高鐵品牌形象開發出此高鐵時刻查詢 APP，輸入查詢資訊便可以得到班次、票價及時刻表。",
    frontend: "JavaScript、Html、Css，API資料介接、切版、資料渲染。",
    url: "https://jasonyen059.github.io/Train-time-table/",
    type: "APP",
    detailImg: [
      { num: 1, img: THSRC1 },
      { num: 2, img: THSRC2 },
      { num: 3, img: THSRC3 },
    ],
  },
];

export default workData;
