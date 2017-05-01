
function ApiResponse(code, type, message) {
    this.code = code
    this.type = type 
    this.message = message 
} 

function readApiResponse(json) {

    if (!json.hasOwnProperty('code')) {
        throw 'No code property'
    }

    if (!json.hasOwnProperty('type')) {
        throw 'No type property'
    }

    if (!json.hasOwnProperty('message')) {
        throw 'No message property'
    }

    return json
}

exports.ApiResponse = ApiResponse
exports.readApiResponse = readApiResponse