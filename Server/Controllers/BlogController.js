const multer = require("multer");
const Blog = require("../Models/Blog");
const CatchAsync = require("../utils/CatchAsync");
const cloudinary = require("../utils/cloudinary");
const factory = require("./HandlerFactory");
const path = require("path");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/blogs");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: multerStorage,
});
exports.uploadImage = (req, res, next) => {
  upload.single("coverImage")(req, res, (err) => {
    if (err) {
      console.error("Image upload error:", err);
      return res.status(400).json({
        status: "error",
        message: "Image upload failed",
      });
    }
    next();
  });
};

exports.uploadFromEditor = CatchAsync(async (req, res, next) => {});

exports.CreateBlog = CatchAsync(async (req, res) => {
  const productData = {
    title: req.body.title,
    content: req.body.content,
    name: req.body.name,
    coverImage: req.file.filename,
    description: req.body.description,
  };

  const newDoc = await Blog.create(productData);

  setTimeout(() => {
    res.status(201).json({
      status: "success",
      data: {
        newDoc,
      },
    });
  }, 1000);
});

exports.updateBlog = CatchAsync(async (req, res, next) => {
  const blogData = {
    title: req.body.title,
    content: req.body.content,
    coverImage: req.file.filename,
    description: req.body.description,
  };

  const doc = await Blog.findByIdAndUpdate(req.params.id, blogData, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return res.status(404).json({
      status: "fail",
      message: "No doc found with that id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.getAllBlogs = factory.getAll(Blog);
exports.deleteBlog = CatchAsync(async (req, res, next) => {
  const doc = await Model.findById(req.params.id);
  if (!doc) {
    return res.status(404).json({
      status: "fail",
      message: "No doc found with that id",
    });
  }
  // Then, delete the document from the database
  const imagePath = `public/uploads/blogs/${doc.coverImage}`;
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Error deleting image:", err);
    }
  });
  await Model.findByIdAndDelete(doc._id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
