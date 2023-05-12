const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet.model");
/*const MongoStore = require("connect-mongo");
const Review = require("../models/Review.model");
const { isLoggedIn } = require("../middleware/user.logedin");*/
/* GET pets page */

router.get("/pets", (req, res, next) => {
  // Get the PetsList from db
  Pet.find()
    .then((petsFromDB) => {
      console.log(petsFromDB);
      res.json ({petsFromDB} );
    })
    .catch((err) => next(err));
});

router.post("/pets", (req, res, next) => {
    const { image, name } = req.body;
  
    Pet.create({ image, name })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  });

module.exports = router;