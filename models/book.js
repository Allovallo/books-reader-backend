// const { Schema, model } = require("mongoose");
// const Joi = require("joi");

// const genreList = ["sci-fi", "romantic"];
// const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

// const { handleMongooseError } = require("../helpers");

// const bookSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     author: { type: String, required: true },
//     favorite: { type: Boolean, default: false },
//     genre: { type: String, enum: genreList, required: true },
//     date: { type: String, match: dateRegexp, required: true },
//   },
//   { versionKey: false, timestamps: true }
// );

// bookSchema.post("save", handleMongooseError);

// const addSchema = Joi.object({
//   title: Joi.string().required(),
//   author: Joi.string().required(),
//   favorite: Joi.boolean(),
//   genre: Joi.string()
//     .valid(...genreList)
//     .required(),
//   date: Joi.string().pattern(dateRegexp).required(),
// });

// const schemas = { addSchema };

// const Book = model("book", bookSchema);

// module.exports = { Book, schemas };

const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  author: String,
});

const Book = model("book", bookSchema);

module.exports = {Book};
