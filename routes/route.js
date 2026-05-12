const express = require("express");
const router = express.Router();

const dummyRoutes = require("./dummyRoutes");
// const eventsRoutes = require("./eventsRoutes");

// Root route
router.get("/", (req, res) => {
  res.send("Welcome to EAMS API - NFDC Event Accreditation Management System");
});

router.use("/dummy", dummyRoutes);

// router.use("/events", eventsRoutes);

module.exports = router;
