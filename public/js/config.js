
const WS_URL =
  `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}`;

const ws = new WebSocket(WS_URL);

const STATUS = {
  WIN: "youwin",
  LOSE: "youlose",
};

const ACTIONS = {
  ADMIN: "admin",
  DRAW: "draw",
  CLIENT_COUNT_UPDATE: "clientCountUpdate",
};