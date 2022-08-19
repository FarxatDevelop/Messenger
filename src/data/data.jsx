import shingisImg from "../images/shingis.jpg";
import asadImg from "../images/asad.jpg";
import alpamisImg from "../images/alpamis-teacher.jpg";

const ContactDatas = [
  {
    name: "Farxat",
    userName: "farxat",
    profilImg: "https://avatars.githubusercontent.com/u/107210253?v=4",
    id: 0,
    messages: [
      {
        message: "Alo",
        id: 1,
        isMessage: true,
      },
    ],
  },
  {
    name: "Farxat",
    userName: "farxat",
    profilImg: alpamisImg,
    id: 1,
    messages: [
      {
        message: "Alo",
        id: 1,
        isMessage: true,
      },
    ],
  },
  {
    name: "Shingis",
    userName: "shingishan",
    profilImg: shingisImg,
    id: 2,
    messages: [
      {
        message: "Qalaysin",
        id: 1,
        isMessage: false,
      },
    ],
  },
  {
    name: "Asad",
    userName: "asad",
    profilImg: asadImg,
    id: 3,
    messages: [
      {
        message: "Jaqsi",
        id: 1,
        isMessage: false,
      },
    ],
  },
  {
    name: "Alpamis Teacher",
    userName: "alpamis",
    profilImg: alpamisImg,
    id: 4,
    messages: [
      {
        message: "Assalamaleykum",
        id: 1,
        isMessage: false,
      },
      {
        message: "Salam",
        id: 2,
        isMessage: true,
      },
      {
        message: "Qalaysiz",
        id: 2,
        isMessage: false,
      },
    ],
  },
  {
    name: "Pavel Durov",
    userName: "pavel",
    profilImg:
      "http://cdn.beta.qalampir.uz/uploads/lO/m_6wIXru9TaAU5VmBOfBFg4lT3zRQaD1.jpg",
    id: 5,
    messages: [
      {
        message: "Hello",
        id: 1,
        isMessage: false,
      },
    ],
  },
  {
    name: "Farxat",
    userName: "farxat",
    profilImg: "https://avatars.githubusercontent.com/u/107210253?v=4",
    id: 6,
    messages: [
      {
        message: "Alo",
        id: 1,
        isMessage: false,
      },
    ],
  },
];

const GroupsData = [
  {
    name: "Olx",
    userName: "olx_uz",
    profilImg:
      "https://store-images.s-microsoft.com/image/apps.30271.9007199266242819.6b05a065-d17c-4eb3-81d2-7b3b9908d260.b032287d-80e4-4f77-b35d-ee646f119167?mode=scale&q=90&h=300&w=300",
    id: 0,
    messages: [
      {
        message: "Alo",
        id: 1,
        isMessage: false,
      },
    ],
  },
];
const ChannelsData = [
  {
    name: "JavaScript Test",
    userName: "js_test",
    profilImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    id: 0,
    messages: [
      {
        message: "Alo",
        id: 1,
        isMessage: false,
      },
    ],
  },
];

export { ContactDatas, GroupsData, ChannelsData };
