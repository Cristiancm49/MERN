/**
 * Root Router
 * Gestionar las Router
 */

import express, { Request, Response } from 'express';
import helloRouter from './HelloRouter';
import  { LogInfo } from '../utils/logger';

// Server instance
let server = express();

// oute instance
let rootRouter = express.Router();

// Activeta for requests to http://localhost:8000/api

rootRouter.get('/', (req: Request, res:Response) => {
    LogInfo('GET https://localhost:8000/api/')
    res.send('Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose')
});

server.use('/', rootRouter); // http://localhost:8000/api
server.use('/hello', helloRouter); // http://localhost:8000/api/hello --> HelloRouter


export default server;