import Server from "./providers/Server";
import { PORT, NODE_ENV } from "./config";
import express from "express";
import cors from 'cors';
// import UserController from "./controllers/UserController";
import Base from "./controllers/Base";

const app = new Server({
    port: PORT,
    env: NODE_ENV,
    middlewares: [
        express.json(),
        express.urlencoded({ extended: true }),
        cors()
    ],
    controllers: [
        // UserController.getInstance()
        Base.getInstance()
    ]
});

app.init();