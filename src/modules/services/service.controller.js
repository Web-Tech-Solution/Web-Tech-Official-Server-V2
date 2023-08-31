import client from "../../../index";

const ourServicesCollection = client
  .db("webTech-solution-official")
  .collection("ourServices");

const getAllServices = async (req, res) => {
  try {
    const query = {};
    const result = await ourServicesCollection.find(query).toArray();
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

const getServicesFromAdmin = async (req, res) => {
  try {
    // console.log('running');
    const result = await ourServicesCollection.find({}).toArray();
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

const createService = async (req, res) => {
  try {
    const service = req.body;
    const result = await ourServicesCollection.insertOne(service);
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

export const ServiceController = {
  getAllServices,
  getServicesFromAdmin,
  createService,
};
