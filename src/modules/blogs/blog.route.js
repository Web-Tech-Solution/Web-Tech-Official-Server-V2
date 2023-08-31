import express from "express";
import { BlogsController } from "./blog.controller";

const router = express.Router();

//* find all blogs
router.get("/blogs/all-blogs", BlogsController.getAllBlogs);

//* find all blogs  expect a specific blog
router.get("/rest-blogs/:id", BlogsController.getRestBlogsById);

//* find a specific blog by id
router.get("/:id", BlogsController.getBlogsById);

//* add a single blog to database
router.post("/create-blog", BlogsController.createBlog);

//* find a specific post comments
router.get("/blogComment/:id", BlogsController.getBlogCommentById);

//* add a single article to database
router.post("/create-blogComment", BlogsController.createComment);

export const BlogRoutes = router;
