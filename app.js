const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routers/contact.route");
const ApiError = require("./app/api-error");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Xin chào đến ứng dụng Quản lý danh bạ!" });
});
app.use("/api/contacts", contactsRouter);

// Error handling
app.use((req, res, next) => {
    next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;
