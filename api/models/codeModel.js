const mongoose = require('mongoose');

const COLLECTION_NAME = 'codes'
const DOCUMENT_NAME = 'code'


const codeShema = mongoose.Schema({
    key : {
        type : String,
        required : true
    },
    code : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ['inactive',"active"],
        default : 'inactive'
    }
},{
    timeseries: true,
    collection: COLLECTION_NAME
})


module.exports = mongoose.model(DOCUMENT_NAME,codeShema)