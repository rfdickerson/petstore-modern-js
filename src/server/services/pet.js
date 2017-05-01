
const redis = require('redis')

const Pet = require('../../models/Pet')

class PetService {

  constructor() {

  }

  addPet(p) {

    console.log('Adding pet')

    let client = redis.createClient()

    client.on('error', (err) => {
      console.log('error: ' + err)
    })

    client.incr('requests', redis.print)

  }

}

module.exports = PetService