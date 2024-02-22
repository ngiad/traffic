function handleError (cb){
    return (req,res,next) => cb(req,res,next).catch(next) 
}

module.exports = handleError