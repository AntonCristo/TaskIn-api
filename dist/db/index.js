"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbClient = void 0;
const dotenv_1 = require("dotenv");
const mongodb_1 = require("mongodb");
(0, dotenv_1.config)();
const connectionString = `mongodb+srv://free-user:${process.env.MONGO_PASSWORD}@freecluster.tomz5.mongodb.net/taskinDB?retryWrites=true&w=majority`;
exports.dbClient = new mongodb_1.MongoClient(connectionString);
//# sourceMappingURL=index.js.map