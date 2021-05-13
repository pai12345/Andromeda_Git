import { Express } from "express"

interface ProtoServerInterface {
    add_configuration(): Express
    start_server(PORT: string | number, app: Express): void
}

export default ProtoServerInterface