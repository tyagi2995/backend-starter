const express = require("express");
const router = express.Router();

// const userRoutes = require("./usersRoutes");
// const eventsRoutes = require("./eventsRoutes");

// Root route
router.get("/", (req, res) => {
  res.send("Welcome to EAMS API - NFDC Event Accreditation Management System");
});

// router.use("/users", userRoutes);

// router.use("/events", eventsRoutes);

module.exports = router;
