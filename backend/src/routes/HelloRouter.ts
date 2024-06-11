import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// Router from express

let helloRouter = express.Router();

// http://localhost:8000/api/hello/
helloRouter.route('/')
    // GET -> http://localhost:8000/api/hello/
    .get(async (req: Request, res: Response) => {
        // Obtain a Query param
        let name: any = req?.query?.name;
        LogInfo(`Query param: ${name}`);
        //Controller Instance to excute method
        const controller: HelloController = new HelloController();
        // Obtein response
        const response = await controller.getMessage(name);
        // Send to the ersponse
        return res.send(response);

    })

export default helloRouter;