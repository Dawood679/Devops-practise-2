"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@repo/db/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("hi there");
});
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = client_1.client.user.create({
        data: {
            username,
            password,
        },
    });
    res.send({ message: "user created suucefully", id: user });
});
app.listen(3002, () => console.log("app is lisntinng"));
