import { RequestHandler } from "express";
import generate_service from "../../service/service"
import generate_enums from "../../utility/enums"
import helper from "../../class/helper/helper"

const Status_Code = generate_enums().Status_Code;

//Hanlder for user repositories
const user_repos: RequestHandler = async (req, res, _next) => {
    try {
        const get_url = helper.generate_url("user_repos", req.body.user);
        const username = { username: "username" };
        
        const result = await generate_service().parameterized_service(get_url, username);
        res.status(result.status).send(result.message);
    }
    catch (error) {
        res.status(Status_Code.ServerError).send(error);
    }
};

// Generate Handlers
const generate_handlers = () => {
    return {
        user_repos: user_repos
    }
}

export default generate_handlers;