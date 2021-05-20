import { Express } from "express"

export interface ServerInterface {
    add_configuration(): Express
    start_server(PORT: string | number, app: Express): void
}
