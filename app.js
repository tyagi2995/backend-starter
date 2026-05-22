require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("eams_db", "nfdc", "Odoc@1$ilm", {
  host: "192.168.1.11",
  dialect: "mysql",
  logging: false,
  port: 3306,
  dialectOptions: {
    connectTimeout: 60000,
  },
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected Successfully");
  } catch (error) {
    console.error("❌ Connection Failed");
    console.error(error);
  }
}

testConnection();
/**
 * Allowed Frontend Origins
 */
const allowedOrigins = [
  "http://localhost:5000",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
];

/**
 * CORS Configuration
 */
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow Postman, mobile apps, server-to-server requests
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS policy violation"));
    },
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],

    // allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//  * Body Parsers, * Limit kept LOW to avoid memory abuse
app.use(express.json({ limit: "10mb" }));

app.use("/api", require("./routes/route"));

const PORT = process.env.PORT || 3000;

/**
 * Health Check Route
 */

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "API initialized successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
