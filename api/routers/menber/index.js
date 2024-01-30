const { Router } = require('express')
const menberRouter = Router()

menberRouter.get('/')
menberRouter.get('/type/:type')
menberRouter.post('/create/link')
menberRouter.put('/update/:id')

module.exports = menberRouter