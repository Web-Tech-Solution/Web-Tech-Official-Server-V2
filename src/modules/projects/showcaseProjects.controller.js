import client from "../../../index";

const ourShowcaseProjectCollection = client
  .db("webTech-solution-official")
  .collection("Showcase-Projects");

const getAllShowcaseProjects = async (req, res) => {
  try {
    const query = {};
    const result = await ourShowcaseProjectCollection.find(query).toArray();
    res.status(200).send({
      message: "successfully get all services",
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

const createShowcaseProject = async (req, res) => {
  try {
    const blog = req.body;
    const result = await ourShowcaseProjectCollection.insertOne(blog);
    res.status(200).send({
      message: "successfully posted",
      data: result,
    });
  } catch (error) {
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

export const ShowcaseProjectController = {
  getAllShowcaseProjects,
  createShowcaseProject,
};
