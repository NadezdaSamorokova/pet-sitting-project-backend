const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet.model");
/*const MongoStore = require("connect-mongo");
const Review = require("../models/Review.model");
const { isLoggedIn } = require("../middleware/user.logedin");*/

/* GET pets page */
// Get the PetsList from db
router.get("/pets", (req, res, next) => {
  Pet.find()
    .then((petsFromDB) => {
      console.log(petsFromDB);
      res.json ({petsFromDB} );
    })
    .catch((err) => next(err));
});

//Getting specific type of pets from DB
// Get dogs from db
router.get("/dogs", (req, res, next) => {
    Pet.find({ species: "dog" })
      .then((petsFromDB) => {
        console.log(petsFromDB);
        res.json({ petsFromDB });
      })
      .catch((err) => next(err));
  });

  // Get cats from db
  router.get("/cats", (req, res, next) => {
    Pet.find({ species: "cat" })
      .then((petsFromDB) => {
        console.log(petsFromDB);
        res.json({ petsFromDB });
      })
      .catch((err) => next(err));
  });

  // Get others from db
  router.get("/others", (req, res, next) => {
    Pet.find({ species: "other" })
      .then((petsFromDB) => {
        console.log(petsFromDB);
        res.json({ petsFromDB });
      })
      .catch((err) => next(err));
  });

  //get one single pet to show the petPage
  router.get("/pets/:petId", (req, res) => {
    const { petId } = req.params;
    console.log(petId);
  
    Pet.findOne({ petId })
     // .populate("reviews")
      .then((petsFromDB) => {
        console.log(petsFromDB);
        res.json({ petsFromDB });
      });
  });


module.exports = router;