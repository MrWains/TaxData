const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		} else {
			const result = await bcrypt.compare(password, user.password);
			if (result) {
				const token = jwt.sign(
					{ email: user.email, userId: user._id },
					process.env.JWT_KEY,
					{
						expiresIn: "1h",
					}
				);
				return res.status(200).json({
					success: true,
					message: "Auth successful",
					token: token,
				});
			}
			res.status(401).json({
				success: false,
				message: "Auth failed",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			error: err,
		});
	}
};

module.exports = {
	login,
};
