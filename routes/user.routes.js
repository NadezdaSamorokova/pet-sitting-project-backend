const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

//get only the sitters from DB

router.get("/sitters", (req, res, next) => {
    User.find({ role: "sitter" })
      .then((usersFromDB) => {
        console.log(usersFromDB);
        res.json({ usersFromDB });
      })
      .catch((err) => next(err));
  });

  module.exports = router;