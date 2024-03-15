const multer = require("multer");
const Product = require("../Models/Product");
const APIFeatures = require("../utils/ApiFeatures");
const catchAsync = require("../utils/CatchAsync");
const path = require("path");
const cloudinary = require("../utils/cloudinary");

const factory = require("./HandlerFactory");
const Category = require("../Models/Category");
const Subcategory = require("../Models/SubCategory");
const Blog = require("../Models/Blog");

const multerStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
  destination: (req, file, cb) => {
    cb(null, "/public/uploads/products");
  },
});
// const multerStorage = multer.memoryStorage();

const upload = multer({
  storage: multerStorage,
});
exports.uploadProductImage = (req, res, next) => {
  upload.single("image")(req, res, (err) => {
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

exports.createProduct = catchAsync(async (req, res) => {
  const productData = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    trending: req.body.trending,
    subCategory: req.body.subCategory || null,
    tags: req.body.tags,
    productImage: req.file.filename,
  };
  const newDoc = await Product.create(productData);
  setTimeout(() => {
    res.status(201).json({
      status: "success",
      data: {
        newDoc,
      },
    });
  }, 1000);
});

exports.getAllData = catchAsync(async (req, res, next) => {
  const [categories, subCategories, products, blogs] = await Promise.all([
    Category.find(),
    Subcategory.find(),
    Product.find(),
  ]);

  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };

  // Use APIFeatures for sorting
  const productsFeatures = new APIFeatures(Product.find(filter), req.query)
    .sort()
    .paginate();
  const sortedProducts = await productsFeatures.query;
  const data = {
    categories,
    subCategories,
    products: sortedProducts,
  };

  res.status(201).json({
    status: "success",
    data: {
      data,
    },
  });
});

exports.getAllProducts = factory.getAll(Product);
exports.updateOne = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
exports.deleteAllProduct = factory.deleteAll(Product);
