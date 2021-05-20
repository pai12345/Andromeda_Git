import { Octokit } from "@octokit/core";
import helper from "../class/helper/helper"
import generate_enums from "../utility/enums"

const Status_Code = generate_enums().Status_Code;

//Non Parameterised octokit service
const direct_service = async (message: string) => {
    try {
        const octokit = new Octokit();
        const result = await octokit.request(`${message}`);
        return helper.generate_status(Status_Code.Success, result);
    }
    catch (error) {
        return helper.generate_status(Status_Code.ServerError, error);
    }
}

//Parameterised octokit service
const parameterized_service = async (message: string, data: any) => {
    try {
        const octokit = new Octokit();
        const result = await octokit.request(`${message}`, data);
        return helper.generate_status(Status_Code.Success, result);
    }
    catch (error) {
        return helper.generate_status(Status_Code.ServerError, error);
    }
}

//Generate Services
const generate_service = () => {
    return {
        direct_service: direct_service,
        parameterized_service: parameterized_service
    }
}

export default generate_service;