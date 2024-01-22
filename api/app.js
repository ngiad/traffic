const dotenv = require('dotenv');
const express = require('express');
const next = require('next');
const morgan = require("morgan")
const fs = require('fs')
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors')
const cookieParser = require('cookie-parser')

dotenv.config()
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();


function start(port) {
    app.prepare().then(() => {
        const server = express();

        // server.use(morgan('dev',{
        //     stream: fs.createWriteStream(path.join(__dirname, './message/access.log'), { flags: 'a' })
        // }))
        server.use(bodyParser.json())
        server.use(cookieParser())
        server.use(compression())
        server.use(cors('*'))

        require('./databases/init.mongodb')

        server.use(require('./routers'))

        server.all('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    });
}


module.exports = start

