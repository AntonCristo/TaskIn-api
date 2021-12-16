import { createServer, Server as HttpServer } from "http";
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Server } from "./src/api/server";
import { env } from "./src/config";

config();
const mongoDbconnectionString = `mongodb+srv://free-user:${process.env.MONGO_PASSWORD}@freecluster.tomz5.mongodb.net/taskinDB?retryWrites=true&w=majority`;

// (async function main() {
//   try {

//   } catch (error) {
//     console.log(error);
//   }
// })();

const app: express.Application = new Server().app;
const server: HttpServer = createServer(app);

mongoose
  .connect(mongoDbconnectionString)
  .then(() => {
    console.log("mongoDB connected");
  })
  .then(() => {
    server.listen(env.NODE_PORT);
  })
  .catch((err) => {
    console.log(err);
  });

server.on("listening", () => {
  console.log(
    `Server is listening on port ${env.NODE_PORT}, environment=${env.NODE_ENV}`
  );
});

server.on("close", () => {
  console.log("Express server finished");
});
