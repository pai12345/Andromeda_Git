import { Express } from "express"

export interface PortInterface{
    PORT: string | number
}
export interface ProtoServerInterface {
    add_configuration(): Express
    start_server(PORT: PortInterface, app: Express): void
}
