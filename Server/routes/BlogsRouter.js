const express = require("express");
const blogcontroller = require("../Controllers/BlogController");

const router = express.Router();

router.route("/").get(blogcontroller.getAllBlogs);

router
  .route("/create-blog")
  .post(blogcontroller.uploadImage, blogcontroller.CreateBlog);

router
  .route("/:id")
  .patch(blogcontroller.uploadImage, blogcontroller.updateBlog)
  .delete(blogcontroller.deleteBlog);
module.exports = router;
