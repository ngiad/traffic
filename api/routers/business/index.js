const { Router } = require('express')
const businessRouter = Router()

businessRouter.get('/')
businessRouter.get('/:id')
businessRouter.post('/create/order')
businessRouter.put('/update/:id')

module.exports = businessRouter