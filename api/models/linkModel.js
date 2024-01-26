const mongoose = require('mongoose');

const COLLECTION_NAME = 'Links'
const DOCUMENT_NAME = 'link'

const linkShema = mongoose.Schema({
    ofmember : {
        type  : mongoose.Types.ObjectId,
        required : [true, 'missing member id']
    },
    order : {
        type : mongoose.Types.ObjectId
    },
    type : {
        type : String,
        enum : ['short','traffic'],
        required : true
    },
    status : {
        type : String,
        default : 'pending'
    },
    report : {
        type : Number
    },
    reportMessage : {
        type : String,
        default : ''
    },
    codeCompleted : {
        type : mongoose.Types.ObjectId
    },
    countout : {
        type : Number,
        default : 1
    }
},{
    timeseries: true,
    collection: COLLECTION_NAME
})


module.exports = mongoose.model(DOCUMENT_NAME,linkShema)