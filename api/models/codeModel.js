const mongoose = require('mongoose');

const COLLECTION_NAME = 'codes'
const DOCUMENT_NAME = 'code'


const codeShema = mongoose.Schema({

},{
    timeseries: true,
    collection: COLLECTION_NAME
})


module.exports = mongoose.model(DOCUMENT_NAME,codeShema)