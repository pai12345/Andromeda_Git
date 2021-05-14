import { Express } from "express"
import { ProtoServerInterface, PortInterface } from "./interface"

abstract class ProtoServer implements ProtoServerInterface{
    abstract add_configuration(): Express
    abstract start_server(PORT: PortInterface, app: Express):void
}

export default ProtoServer