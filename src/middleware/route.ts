import { RequestHandler } from "express";
import generate_enums from "../utility/enums"

/**
 * Middleware - Route Validation
 * @description
 * Middleware to validate routes
 */
const route_middleware: RequestHandler = async (req, res) => {
    try {
        let status: number;
        let message: string;

        if (req.originalUrl === "/") {
            status = generate_enums().Status_Code.Success;
            message = "Andromeda Git Server";
        }
        else {
            status = generate_enums().Status_Code.NotFound;
            message = "Service Not Found";
        }
        res.status(status).send(message);
    }
    catch (error) {
        res.status(error.esponse.status).send(error);
    }
};

export default route_middleware;