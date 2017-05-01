
function Pet(id, name, photoUrls, tags, status) {
    this.id = id
    this.name = name
    this.photoUrls = photoUrls
    this.tags = tags
    this.status = status
}

function printPet(pet) {
    console.log(pet.id);
}

function readPetJSON(json) {

    if (!json.hasOwnProperty('id')) {
        throw 'No code property'
    }

    if (!json.hasOwnProperty('name')) {
        throw 'No type property'
    }

    if (!json.hasOwnProperty('photoUrls')) {
        throw 'No message property'
    }

    if (!json.hasOwnProperty('tags')) {
        throw 'No message property'
    }

    if (!json.hasOwnProperty('status')) {
        throw 'No message property'
    }

    return json
}

exports.Pet = Pet 
exports.printPet = printPet
exports.readPetJSON = readPetJSON