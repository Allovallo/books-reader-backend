// const mongoose = require("mongoose");

// const app = require("./app");

// const { DB_HOST, PORT = 3000 } = process.env;

// mongoose.set("strictQuery", true);

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     app.listen(PORT);
//     console.log("Successfully connected!");
//     console.log(`Example app listening on port ${PORT}`);
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });

const mongoose = require("mongoose");

const app = require("./app");

const {DB_HOST} = process.env

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
