'use strict';
require('dotenv').config();
module.exports = {
    app: {
        name: "licenta",
        superSecret: "power",
        baseUrl: `http://localhost:`,
        port: process.env.PORT,
        expiresIn: 72000000,
        devEnvironment: process.env.NODE_ENV,
        prodEnvironment: process.env.NODE_ENV_PROD,
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