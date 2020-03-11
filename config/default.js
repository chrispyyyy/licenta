'use strict';
require('dotenv').config();
module.exports = {
    app: {
        name: "licenta",
        superSecret: "power",
        baseUrl: `http://localhost:`,
        port: process.env.PORT,
        expiresIn: 86400

    },

    api: {
        prefix: '^/api',
        version: [1],

    },
    database: {
        url: process.env.DB_URL,

    }
};