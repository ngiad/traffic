const { Router } = require('express')
const Linkrouter = Router()


Linkrouter.get('/:key')
Linkrouter.get('/traffic/check/:key')
Linkrouter.get("/create/code")

module.exports = Linkrouter