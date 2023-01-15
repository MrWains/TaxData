const mongoose = require("mongoose");
const User = require("../schema/user");
const jwt = require("jsonwebtoken");
const ObjectId = mongoose.Types.ObjectId;
const bcrypt = require("bcryptjs");
const SECRET = "secretkey";
loginUser = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.status(500).send("Error on the server.");
    }
    if (!user) {
      return res.status(404).send("No user found.");
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({ auth: false, token: null });
    }
    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
};

registerUser = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  // check if user already exists
  username = req.body.username;
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      return res.status(500).send("Error on the server.");
    }
    if (!user) {
      User.create(
        {
          username: req.body.username,
          password: hashedPassword,
          email: req.body.email,
          role: req.body.role,
          created: Date.now(),
        },
        (err, user) => {
          if (err) {
            return res
              .status(500)
              .send("There was a problem registering the user.");
          }
          const token = jwt.sign({ id: user._id }, SECRET, {
            expiresIn: 86400, // expires in 24 hours
          });
          res.status(200).send({ auth: true, token: token });
        }
      );
    } else {
      return res.status(500).send("User already exists.");
    }
  });
};

module.exports = {
  loginUser,
  registerUser,
};
