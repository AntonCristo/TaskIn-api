"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const dotenv_1 = require("dotenv");
const server_1 = require("./api/server");
const config_1 = require("./config");
(0, dotenv_1.config)();
// (async function main() {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// })();
const app = new server_1.Server().app;
const server = (0, http_1.createServer)(app);
server.listen(config_1.env.NODE_PORT);
server.on("listening", () => {
    console.log(`Server is listening on port ${config_1.env.NODE_PORT}, environment=${config_1.env.NODE_ENV}`);
});
server.on("close", () => {
    console.log("Express server finished");
});
//# sourceMappingURL=index.js.map