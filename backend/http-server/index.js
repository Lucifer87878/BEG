import express from "express";
import { createResourceRouter} from events-routes.js

/*
/localhost300/
    /events
    /attendes
    /user
    /creator
    /StartTime
    /EndTime
*/

const server = express();

const port = 3000;

server.use(express.json());


server.use("/events", createResourceRouter());
