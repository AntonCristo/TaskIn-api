import { createServer, Server as HttpServer } from "http";
import { config } from "dotenv";
import express from "express";
import { Server } from "./src/api/server";
import { env } from "./src/config";

config();

// (async function main() {
//   try {

//   } catch (error) {
//     console.log(error);
//   }
// })();

const app: express.Application = new Server().app;
const server: HttpServer = createServer(app);

server.listen(env.NODE_PORT);

server.on("listening", () => {
  console.log(
    `Server is listening on port ${env.NODE_PORT}, environment=${env.NODE_ENV}`
  );
});

server.on("close", () => {
  console.log("Express server finished");
});
