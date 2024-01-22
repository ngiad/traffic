const { Router } = require('express')
const router = Router()


router.get("/api",(req,res) => res.send("<h1>welcome to sorni tech</h1>"))


module.exports = router