"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseApp = void 0;
const config_1 = require("../../config");
const app_1 = require("firebase/app");
exports.firebaseApp = (0, app_1.initializeApp)(config_1.firebaseConfig);
//# sourceMappingURL=index.js.map