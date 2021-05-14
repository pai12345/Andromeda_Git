import { Statusmessage } from "../utility/interface";

export interface HelperInterface {
    generate_url(type: string, data: any): Statusmessage
    generate_status(status: number, message: string): Statusmessage
}