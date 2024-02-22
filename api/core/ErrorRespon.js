

class INTERNALERROR extends Error {
    constructor(message = "INTERNAL ERROR!",status = 500){
        super(message)
        this.status = status
    }
}



module.exports = {
    INTERNALERROR
}