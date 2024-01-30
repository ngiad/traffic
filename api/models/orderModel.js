const mongoose = require('mongoose');

const COLLECTION_NAME = 'orders'
const DOCUMENT_NAME = 'order'


const orderShema = mongoose.Schema({
    buyerId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Wait for pay', "complete", "error occurred", 'banner', 'pause'],
        default: 'Wait for pay'
    },
    forwebsite: {
        type: String,
        match: ['/(http(s)?://.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/', "Please enter website link"],
        required: true
    },
    keyword: {
        type: String,
        required: [true, 'Please enter google search keywords']
    },
    image: {
        type: String
    },
    key: {
        type: String,
        required: true
    }
}, {
    timeseries: true,
    collection: COLLECTION_NAME
})


module.exports = mongoose.model(DOCUMENT_NAME, orderShema)