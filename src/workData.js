import img from "./img/yellowcar.jpg";
import img2 from "./img/jason.jpg";
import covidLogo from "./img/covid_logo.png";
import mooncakeLogo from "./img/mooncakeLogo.png";
import motorLogo from "./img/yencustom.png";
import musicLogo from "./img/playerlogo.jpg";
import weatherLogo from "./img/weatherlogo.jpg";
import hsrLogo from "./img/hsrlogo.jpg";

const workData = [
  {
    id: 1,
    name: "COVID19_",
    img: covidLogo,
    describe: "This is covid app",
    url: "https://covid19.mouthird.com/#/",
    type: "APP",
    detailImg: [
      { num: 1, img: img },
      { num: 2, img: img2 },
      { num: 3, img: img },
    ],
  },

  {
    id: 2,
    name: "MOONCAKE_",
    img: mooncakeLogo,
    describe: "This is mooncake app",
    url: "https://www.wpgmooncake.com/",
    type: "WEB_APP",
    detailImg: [
      { num: 1, img: img2 },
      { num: 2, img: img },
      { num: 3, img: img2 },
    ],
  },

  {
    id: 3,
    name: "MOTOR_",
    img: motorLogo,
    describe: "This is motor app",
    url: "https://jasonyen059.github.io/Yenmotor/#/",
    type: "WEB",
    detailImg: [
      { num: 1, img: img },
      { num: 2, img: img2 },
      { num: 3, img: img },
    ],
  },

  {
    id: 4,
    name: "MUSICPLAYER_",
    img: musicLogo,
    describe: "This is musicplayer app",
    url: "https://jasonyen059.github.io/Clock/",
    type: "WEB",
    detailImg: [
      { num: 1, img: img2 },
      { num: 2, img: img },
      { num: 3, img: img2 },
    ],
  },

  {
    id: 5,
    name: "WEATHER_",
    img: weatherLogo,
    describe: "This is weather app",
    url: "https://jasonyen059.github.io/weatherApp/",
    type: "APP",
    detailImg: [
      { num: 1, img: img },
      { num: 2, img: img2 },
      { num: 3, img: img },
    ],
  },

  {
    id: 6,
    name: "HST_",
    img: hsrLogo,
    describe: "This is hst app",
    url: "https://jasonyen059.github.io/Train-time-table/",
    type: "APP",
    detailImg: [
      { num: 1, img: img },
      { num: 2, img: img2 },
      { num: 3, img: img },
    ],
  },
];

export default workData;
