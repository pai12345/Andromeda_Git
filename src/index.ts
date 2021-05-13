import generateEnv from "./config/config";
import server from "./class/server/server";

//Fetch port Details
const PORT = generateEnv().PORT;

//Fetch server configurations
const app = server.add_configuration()

// Start server
server.start_server(PORT, app)