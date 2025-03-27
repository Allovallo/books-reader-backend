const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const booksRouter = require("./routes/api/books");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: message });
});

module.exports = app;

const mongoose = require("mongoose");

// const app = require("./app");
const port = process.env.PORT || 5000;

const DB_HOST =
  "mongodb+srv://grossco:poiP36Z7WnTvbTLJ@cluster0.2qtkt.mongodb.net/books_reader?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(port);
    console.log("Successfully connected!");
    console.log(`Example app listening on port ${port}`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
