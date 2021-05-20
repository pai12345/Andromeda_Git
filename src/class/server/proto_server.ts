import { Express } from "express"
import { ServerInterface } from "./interface"

abstract class ProtoServer implements ServerInterface{
    abstract add_configuration(): Express
    abstract start_server(PORT: string | number, app: Express):void
}

export default ProtoServer