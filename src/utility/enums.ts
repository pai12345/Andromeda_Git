/**
 * Enumeration for API Status
 * @description
 * Enumeration having details for API Status
 */
enum Status_Code {
    NotFound = 404,
    Success = 200,
    ServerError = 500,
    BadRequest = 400
}

enum API_Methods {
    GET = "GET",
    POST = "POST"
}

enum API_Type {
    users = "users",
    repos = "repos"
}

//Generate enums
const generate_enums = () => {
    return {
        Status_Code: Status_Code,
        API_Methods: API_Methods,
        API_Type: API_Type
    }
}

export default generate_enums