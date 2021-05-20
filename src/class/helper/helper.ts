import generate_enums from "../../utility/enums"
import { HelperInterface } from "./interface"
import ProtoHelper from "./proto_helper"

class Helper extends ProtoHelper implements HelperInterface{
    // Generate URL
    generate_url(type: string, data: any) {
        const { API_Methods,API_Type } = generate_enums()
        switch (type) {
            case "user_repos":
                return `${API_Methods.GET} /${API_Type.users}/${data}/${API_Type.repos}`;
            default:
                return "Invalid"
        }
    }
    //Generate status object
    generate_status(status: number, message: any){
            return {status: status, message: message}
    }
}

//Instance of Helper Class
const helper = new Helper()
export default helper