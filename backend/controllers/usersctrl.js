const mongoose = require("mongoose");
const User = require("../schema/user");
const jwt = require("jsonwebtoken");
const ObjectId = mongoose.Types.ObjectId;
const bcrypt = require("bcryptjs");
const SECRET = "secretkey";
const Utils = require("../utils/utils");
loginUser = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      const errRet = Utils.errorObj(err);
      return res.status(500).send(errRet);
    }
    if (!user) {
      const errRet = Utils.errorObj("No user found.");
      return res.status(404).send(errRet);
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      const errRet = Utils.errorObj("Password is not valid!");
      return res.status(401).send(errRet);
    }
    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });
    const successRet = Utils.successObj("User successfully logged in!", {
      auth: true,
      token: token,
    });
    res.status(200).send(successRet);
  });
};

registerUser = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  // check if user already exists
  username = req.body.username;
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      const errRet = Utils.errorObj(err);
      return res.status(500).send(errRet);
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
            const errRet = Utils.errorObj(err);
            return res.status(500).send(errRet);
          }
          const token = jwt.sign({ id: user._id }, SECRET, {
            expiresIn: 86400, // expires in 24 hours
          });
          const successRet = Utils.successObj("User successfully registered!", {
            auth: true,
            token: token,
          });
          res.status(200).send(successRet);
        }
      );
    } else {
      const errRet = Utils.errorObj("User already exists.");
      return res.status(500).send(errRet);
    }
  });
};

module.exports = {
  loginUser,
  registerUser,
};
