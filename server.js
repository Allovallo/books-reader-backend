const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://grossco:poiP36Z7WnTvbTLJ@cluster0.2qtkt.mongodb.net/books_reader?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
