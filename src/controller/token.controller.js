const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const getToken = (req, res) => {
	const { name, password } = req.body;
	if (name == "Juan" && password == "Oh") {
		token = jwt.sign(
			{
				name,
                password,
			},
			process.env.TOKEN_KEY,
			{
				expiresIn: "5m",
			}
		);
        return res.status(201).json({
			status: 201,
			token: token,
		});
	}
    return res.status(400).json({
		status: 400
	});
};

module.exports = {
	getToken,
};