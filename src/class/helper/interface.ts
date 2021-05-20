import { Statusmessage } from "../../utility/interface";

export interface HelperInterface {
    generate_url(type: string, data: any): string
    generate_status(status: number, message: any): Statusmessage
}