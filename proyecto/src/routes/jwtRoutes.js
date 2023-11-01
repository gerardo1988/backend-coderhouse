
import CustomRouter from "./custom/customRouter.js";
import * as JwtController from "../controllers/jwtController.js";

export default class UsersExtendRouter extends CustomRouter{
    
    init(){
        this.post("/",['USER'], JwtController.loginUser);
    }
}
