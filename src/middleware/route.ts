import { RequestHandler } from "express";
import generate_enums from "../utility/enums"
import helper from '../class/helper/helper';
import { Statusmessage } from "../utility/interface";

/**
 * Middleware - Route Validation
 * @description
 * Middleware to validate routes
 */
const route_middleware: RequestHandler = async (req, res) => {
    try {
        let result: Statusmessage;

        if (req.originalUrl === "/") {
            result = helper.generate_status(generate_enums().Status_Code.Success, "Andromeda Git Server");
        }
        else {
            result = helper.generate_status(generate_enums().Status_Code.NotFound, "Service Not Found");
        }
        res.status(result.status).send(result.message);
    }
    catch (error) {
        res.status(error.esponse.status).send(error);
    }
};

export default route_middleware;