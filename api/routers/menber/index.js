const { Router } = require('express')
const handleError = require('../../helpers/handleError')
const { INTERNALERROR } = require('../../core/ErrorRespon')
const { OK } = require('../../core/SuccessRespon')
const menberRouter = Router()

menberRouter.get('/',handleError(async(req,res) => {
   return (await new OK({pageSize : 10},{name :"Nghia"})).send(res)
}))
menberRouter.get('/type/:type')
menberRouter.post('/create/link')
menberRouter.put('/update/:id')

module.exports = menberRouter