const { Router } = require('express')
const router = Router()


router.get("/api",(req,res) =>{ 
    res.cookie('test', "test hsdugh sdf gsdfg sdfg sdf");
    res.send("<h1>welcome to sorni tech</h1>")
})

router.use("/api/menber",require("./menber"))
router.use((err,req,res,next) => {
   const status = err.status || 500
    res.status(status).json({err : err.message,status : err.status})
})

module.exports = router