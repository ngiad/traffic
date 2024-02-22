

class OK{
    constructor(meta,data){
        this.meta = meta
        this.data = data
    }

    send(res,header){
        return res.status(200).json({meta : this.meta,data : this.data})
    }
}


module.exports = {
    OK
}