const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        application: "Smart QR Pro",
        version: "1.0.0",
        message: "Backend API is running successfully."
    });
});

module.exports = app;