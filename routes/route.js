const express = require("express");
const router = express.Router();

const dummyRoutes = require("./dummyRoutes");
const { postCheck } = require("../utils/validation");
const { dummy } = require("../validations/dummyValidation");

// Root route
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to EAMS API - NFDC Event Accreditation Management System",
  });
});

router.use("/dummy", dummyRoutes);

// router.use("/events", eventsRoutes);

module.exports = router;
