const mongoose = require('mongoose');
const bcrybt = require("bcrypt")


const COLLECTION_NAME = "ACCESSSS"
const DOCUMENT_NAME = "access"

const accessSchema = new mongoose.Schema({}, {
    timeseries: true,
    collection: COLLECTION_NAME
})

accessSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    const salt = await bcrybt.genSalt(10)
    const hashPassword = await bcrybt.hash(this.password, salt)
    this.password = hashPassword
    next()
})

module.exports = mongoose.model(DOCUMENT_NAME, accessSchema);