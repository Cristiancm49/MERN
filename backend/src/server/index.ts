import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from "helmet";

// TODO HTTPS

// Root Router
import rootRouter from '../routes';



// Create Express APP
const server: Express = express();
// const port: string | number = process.env.PORT || 8000;

// Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes
// se establece el /api dandonos esta ruta http://localhost:8000/api/...

server.use(
    '/api', 
    rootRouter
    )


// TODO: Mongoose Connection


// Security Config
server.use(helmet());
server.use(cors());

// Content Type:
server.use(express.urlencoded({extended: true, limit: '50mb'}));
server.use(express.json({limit: '50mb'}));

// Redirectio Config
server.get('/', (req: Request, res:Response) => {
    res.redirect('/api');
});

export default server;
