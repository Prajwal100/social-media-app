"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //
const http_1 = require("http");
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
const mainServer = (0, http_1.createServer)(app);
const PORT = config_1.default.app.PORT;
const HOST = config_1.default.app.HOST;
app.use("/", (req, res) => {
    res.send("API running");
});
mainServer.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://${HOST}:${PORT}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map