const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");


//get all the users from DB
router.get("/users", (req, res, next) => {
  User.find()
    .then((usersFromDB) => {
      console.log(usersFromDB);
      res.json ({usersFromDB} );
    })
    .catch((err) => next(err));
});

//get only the sitters from DB
router.get("/sitters", (req, res, next) => {
    User.find({ role: "sitter" })
      .then((usersFromDB) => {
        console.log(usersFromDB);
        res.json({ usersFromDB });
      })
      .catch((err) => next(err));
  });

    //get one single pet to show the petPage
    router.get("/users/:userId", (req, res) => {
      const { userId } = req.params;
      console.log("user id", userId);
    
      User.findOne({ _id: userId })
        .then((userFromDB) => {
          console.log(userFromDB);
          res.json({ userFromDB });
        });
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