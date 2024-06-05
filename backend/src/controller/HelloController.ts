import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "@/utils/logger";


export class HelloController implements IHelloController {

    public async getMessage(name?: String | undefined): Promise<BasicResponse> {
        LogSuccess('[/api/hello] get request');

        return {
            message: `Hello ${name} || "Word!!!"`
        }
            
        
    }
    
}