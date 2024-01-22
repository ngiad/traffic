const { Router } = require('express')
const router = Router()


router.get("/api",(req,res) =>{ 
    res.cookie('test', "test hsdugh sdf gsdfg sdfg sdf");
    res.send("<h1>welcome to sorni tech</h1>")
})


module.exports = router