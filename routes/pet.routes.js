const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet.model");
const Review = require("../models/Review.model");
/*const MongoStore = require("connect-mongo");
const { isAuthenticated } = require("../middleware/jwt.middleware");*/

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
  router.get("/pets/:id", (req, res) => {
    const { id } = req.params;
    console.log("pet id", id);
  
    Pet.findOne({ _id: id })
      .populate("reviews")
      .then((petFromDB) => {
        console.log(petFromDB);
        res.json({ petFromDB });
      });
  });

  //CREATE REVIEWS
router.post("/pets/:id/reviews", (req, res) => {
  const { username, review } = req.body;
  const { id } = req.params;
  
  Review.create({ username: username, review: review }).then((newReview) => {
    Pet.findOneAndUpdate(
      { _id: id },
      { $push: { reviews: newReview._id } }
    ).then(() => {
      res.json({ success: true });
    });
  });
});

module.exports = router;