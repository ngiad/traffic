const mongoose = require("mongoose");
const { db: { host, port, name } } = require("../configs/config.mongodb");
const { countConnectMongodb } = require("../helpers/check.connect.mongodb");

const CONNECTSTRING = `${host}://${port}/${name}`
class Database{
    constructor(){
        this.connect()
    }

    connect(type = 'mongodb'){
        if (process.env.NODE_ENV !== "production") {
            mongoose.set("debug", true);
            mongoose.set('debug', { color: 'true' })
        }

        mongoose
        .connect(CONNECTSTRING, {
            maxPoolSize: 50  
        })
        .then((_) => console.log("Connect mongodb Success!", countConnectMongodb()))
        .catch((err) => console.error("Connect Error ::: ", err));
    }

    static getInstance() {
        if (!Database.instance) Database.instance = new Database()
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb