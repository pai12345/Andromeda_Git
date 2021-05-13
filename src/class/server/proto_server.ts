import { Express } from "express"
import ProtoServerInterface from "./interface"

abstract class ProtoServer implements ProtoServerInterface{
    abstract add_configuration(): Express
    abstract start_server(PORT: string | number, app: Express):void
}

export default ProtoServer