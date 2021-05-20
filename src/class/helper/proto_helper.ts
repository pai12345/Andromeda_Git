import { Statusmessage } from "../../utility/interface";
import { HelperInterface } from "./interface"

abstract class ProtoHelper implements HelperInterface{
    abstract generate_url(type: string, data: any): string
    abstract generate_status(status: number, message: any):Statusmessage
}

export default ProtoHelper