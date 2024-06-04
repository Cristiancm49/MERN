import express, { Express, Request, Response } from "express";
import dovent from "dotenv";
import { request } from "http";

// Configuration the .env file
dovent.config();


// Create Express APP
const app: Express = express();
const port = process.env.PORT || 8000;


// Define the first Route of APP
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my API Restful: Express + TS + Swagger + Mongoose');
})

// Execute APP and listen requests to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at  http://localhost:${port}`)
})