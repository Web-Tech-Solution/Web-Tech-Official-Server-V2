import client from "../../../index";

const submittedProjectCollection = client
  .db("webTech-solution-official")
  .collection("project");

const getAllSubmittedProjects = async (req, res) => {
  try {
    const query = {};
    const result = await submittedProjectCollection.find(query).toArray();
    if (result.length !== 0) {
      res.status(200).send({
        message: "successfully found",
        data: result,
      });
    } else {
      res.status(200).send({
        message: "no data",
        data: result,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

const createSubmittedProject = async (req, res) => {
  try {
    const blog = req.body;
    const result = await submittedProjectCollection.insertOne(blog);
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

export const SubmittedProjectController = {
  getAllSubmittedProjects,
  createSubmittedProject,
};
