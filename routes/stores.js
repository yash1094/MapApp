const express = require("express");
const { getStores, addStore } = require("../controllers/stores");
const router = express.Router();

//routes
router
  .route("/")
  .get(getStores)
  .post(addStore);

module.exports = router;
