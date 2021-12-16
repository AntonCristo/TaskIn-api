import { createServer, Server as HttpServer } from "http";
import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import { Server } from "./src/api/server";
import { env } from "./src/config";

config();
const mongoDbconnectionString = `mongodb+srv://free-user:${process.env.MONGO_PASSWORD}@freecluster.tomz5.mongodb.net/taskinDB?retryWrites=true&w=majority`;

(async function main() {
  try {
    await mongoose.connect(mongoDbconnectionString);
    console.log("mongoDB connected");

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
  } catch (error) {
    console.log(error);
  }
})();
