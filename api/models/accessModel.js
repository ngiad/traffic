const mongoose = require('mongoose');
const bcrybt = require("bcrypt")


const COLLECTION_NAME = "ACCESSSS"
const DOCUMENT_NAME = "access"

const accessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a  valid emaial"
        ],
        unique: true,
        trim: true
    },
    password: {
        type: String
    },
    roles: {
        type: Array,
        default: []
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'banner', 'monitor'],
        default: 'inactive'
    },
    photo: {
        type: String,
        default: "https://i.ibb.Co/4pDNDk1/avatar.png"
    },
    address: {
        type: Array,
        default: []
    },
    zipcode: {
        type: String,
    },
    wallet: {
        default: {
            coin: 0
        }
    }
}, {
    timeseries: true,
    collection: COLLECTION_NAME
})

accessSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    if (this.password) {
        const salt = await bcrybt.genSalt(10)
        const hashPassword = await bcrybt.hash(this.password, salt)
        this.password = hashPassword
    }
    next()
})

module.exports = mongoose.model(DOCUMENT_NAME, accessSchema);