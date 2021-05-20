import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import express, { json, Express } from "express";
import route_middleware from "../../middleware/route";
import ProtoServer from "./proto_server"
import { ServerInterface } from "./interface"
import router from "../../router/routes/route"

/**
 * Class - Server
 * @description
 * Class having implementation details for Express Server
 */
class Server extends ProtoServer implements ServerInterface{
  /**
   * Function - Add Configuration
   * @description
   * Function having configuration details for express app
   */
    add_configuration() {
        const app = express();
        const cors_option = { origin: "*" }

        //Set to app
        app.set("trust proxy", 1);

        //Utility Middelwares
        app.use(json());
        app.use(cors(cors_option));
        app.use(helmet());
        app.use(compression());

        // Attach Routes
        app.use("/api/Git/", router);
        
        //Custom Middelwares
        app.use(route_middleware);
        return app;
    }
    start_server(PORT: string | number, app: Express) {
        //Listener
        const express_server = app.listen(PORT, () => {
            console.log(`Listening on Port: ${PORT}`);
        });
        
        //Server graceful exit
        process.on("SIGTERM", () => {
            console.log("Closing http server");
            express_server.close(() => {
                console.log("Http server closed");
                process.exit(0);
            });
            process.exit(0);
        });
    }
}

/**
 * Instance - Server
 * @description
 * Instance of Server Class
 */
const server = new Server();
export default server;
