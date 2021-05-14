import { RequestHandler } from "express";
import { Octokit } from "@octokit/core";
import generate_enums from "../utility/enums"
import helper from "../helper/helper"

const Status_Code = generate_enums().Status_Code;

//Hanlder for user repositories
const user_repos: RequestHandler = async (req, res, _next) => {
    try {
        let result;
        const octokit = new Octokit();
        const get_url = helper.generate_url("user_repos", req.body.user);
        
        const { status, message } = get_url;
        
        if (status === Status_Code.Success) {
            result = await octokit.request(`${message}`, {
                username: 'username'
            })
        }
        else {
            result = message
        }
        res.status(status).send(result);
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