const express = require("express");
const dotenv = require("dotenv");

// config dotenv
dotenv.config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

// Middlewares
app.use(express.json());

// Archivos estáticos
app.use(express.static("./src/public"));

// Rutas
app.use(require("./routes/routes"));

// Servidor Express
app.listen(port, () => {
	console.log(`http://${host}:${port}`);
});

// Renderizar HTML
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
