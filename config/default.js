'use strict';
require('dotenv').config();
module.exports = {
    app: {
        name: "licenta",
        superSecret: "power",
        baseUrl: `http://localhost:`,
        port: process.env.PORT,
        expiresIn: 72000000,
        environment: process.env.NODE_ENV,
        sessionName: process.env.SESS_NAME
    },

    api: {
        prefix: '/',
        version: [1],

    },
    database: {
        url: process.env.DB_URL,

    }
};