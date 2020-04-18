const dotenv = require("dotenv");
dotenv.config();

const config = {
    type: "mssql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: ["dist/entities/**/*.js"],
    options: {
        enableArithAbort: true
    },
    enabledDrivers: ["mssql"],
};


module.exports = config;