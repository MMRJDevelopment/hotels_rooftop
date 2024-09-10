const mongoose = require("mongoose");

const postShema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: String,
    },
    content: String,
    converImg: String,
    cotegory: String,
    author: String,
    rating: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

exports.Post = mongoose.model("posts", postShema);
