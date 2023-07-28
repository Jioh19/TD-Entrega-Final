const { Pool } = require("pg");
const dotenv = require("dotenv");

// Configurar dotenv
dotenv.config();

const pool = new Pool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	port: process.env.DB_PORT,
});

module.exports = pool;
