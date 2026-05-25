const express = require("express");
const router = express.Router();
const dummyController = require("../controller/dummyController");
const { postCheck } = require("../utils/validation");
const { dummy } = require("../validations/dummyValidation");

router.get("/dummys", dummyController.getDummy);

router.post("/dummys-login", postCheck(dummy), dummyController.createDummy);

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Users API initialized successfully",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
