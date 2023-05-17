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

//get one user from DB and update info
router.put('/users/:userId', (req, res, next) => {
  const { userId } = req.params
  const { username } = req.body; 
  console.log("im in the backend", username)

  User.findByIdAndUpdate(userId, {username} , { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      console.log("user updated", user)
      res.json(user);
    })
    .catch((err) => next(err));
});

  module.exports = router;