import generate_enums from "../utility/enums"
import { HelperInterface } from "./interface"

class Helper implements HelperInterface{
    generate_url(type: string, data: any) {
        let message;
        let status;

        const { Status_Code, API_Methods,API_Type } = generate_enums()
        switch (type) {
            case "user_repos":
                status = Status_Code.Success
                message = `${API_Methods.GET} /${API_Type.users}/${data}/${API_Type.repos}`;
                break;
            default:
                status = Status_Code.BadRequest
                message = "Invalid type for url"
                break;
        }
        return this.generate_status(status, message)
    }
    generate_status(status: number, message: string){
            return {status: status, message: message}
    }
}

const helper = new Helper()
export default helper