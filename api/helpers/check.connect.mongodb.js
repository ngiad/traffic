const { default: mongoose } = require("mongoose");
const os = require("os");

const process = require("process");
const _SECONDS = 5000;

const countConnectMongodb = () => {
    return mongoose.connections.length;
};

const checkOverLoad = () => {
    setInterval(() => {
        const countConnect = mongoose.connections.length;
        const numCores = os.cpus.length;
        const memoryUsage = process.memoryUsage().rss;

        const maxConnections = numCores * 5;
        console.log(`Active connections : ${countConnect}`)
        console.log(`Memory usage : ${memoryUsage / 1024 / 1024} MB`)
        if (maxConnections > countConnect) console.warn("Connect Overload detected");
    }, _SECONDS);
};


module.exports = {
    countConnectMongodb,
    checkOverLoad,
};
