const express = require("express");
const dummyController = require("../controller/dummyController");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({
//     status: 200,
//     message: "Users API initialised",
//   });
// });

// Health check / welcome route
router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Users API initialized successfully",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
