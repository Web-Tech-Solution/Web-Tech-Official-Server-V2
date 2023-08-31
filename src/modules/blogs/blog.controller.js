import client from "../../../index";

const blogsCollection = client
  .db("webTech-solution-official")
  .collection("blogs");
const blogCommentsCollection = client
  .db("webTech-solution-official")
  .collection("blogComments");

const getAllBlogs = async (req, res) => {
  try {
    const query = {};
    const result = await blogsCollection.find(query).toArray();
    res.status(200).send({
      message: "successfully found",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

const getRestBlogsById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const query = { _id: { $ne: new ObjectId(blogId) } };
    const result = await blogsCollection.find(query).toArray();
    res.status(200).send({
      message: "successfully found",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

const getBlogsById = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await blogsCollection.findOne(query);
    res.status(200).send({
      message: "successfully found",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = req.body;
    const result = await blogsCollection.insertOne(blog);
    res.status(200).send({
      message: "successfully posted",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

const getBlogCommentById = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { blogID: id };
    const result = await blogCommentsCollection.find(query).toArray();
    res.status(200).send({
      message: "successfully found",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

const createComment = async (req, res) => {
  try {
    const blogComments = req.body;
    const result = await blogCommentsCollection.insertOne(blogComments);
    res.status(200).send({
      message: "successfully posted",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

export const BlogsController = {
  getAllBlogs,
  getRestBlogsById,
  getBlogsById,
  createBlog,
  getBlogCommentById,
  createComment,
};
