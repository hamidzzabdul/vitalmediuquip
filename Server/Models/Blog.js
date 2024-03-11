// models/blog.js
const mongoose = require("mongoose");
const slugify = require("slugify");
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: {
    type: String,
    // required: [true, "please enter Description"],
  },
  coverImage: { type: String, required: true },
  name: { type: String, required: true },
  slug: String,
  description: {
    type: String,
    required: [true, "please enter a description"],
  },
  createdAt: { type: Date, default: Date.now },
});

blogSchema.index({ slug: 1 });

blogSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
