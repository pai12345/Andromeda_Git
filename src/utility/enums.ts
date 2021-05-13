/**
 * Enumeration for API Status
 * @description
 * Enumeration having details for API Status
 */
enum Status_Code {
    NotFound = 404,
    Success = 200
}

const generate_enums = () => {
    return {
        Status_Code: Status_Code
    }
}

export default generate_enums