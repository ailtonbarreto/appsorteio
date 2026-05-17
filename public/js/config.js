// const WS_URL = "ws://127.0.0.1:3000";

// const STATUS = {
//   WIN: "youwin",
//   LOSE: "youlose",
// };

// const ACTIONS = {
//   ADMIN: "admin",
//   DRAW: "draw",
//   CLIENT_COUNT_UPDATE: "clientCountUpdate",
// };

const WS_URL =
  `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}`;

const STATUS = {
  WIN: "youwin",
  LOSE: "youlose",
};

const ACTIONS = {
  ADMIN: "admin",
  DRAW: "draw",
  CLIENT_COUNT_UPDATE: "clientCountUpdate",
};