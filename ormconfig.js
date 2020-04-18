const dotenv = require("dotenv");
dotenv.config();

const config = {
    type: "mssql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    ssl: process.env.SSL,
    entities: ["dist/entities/**/*.js"]
};


module.exports = config;