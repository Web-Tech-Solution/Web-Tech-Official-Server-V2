import client from "../../../index";

const clientProjectCollection = client
  .db("webTech-solution-official")
  .collection("clientProject");

const getOrderedProjectsByEmail = async (req, res) => {
  try {
    const buyerEmail = req.query.email;
    const query = { orderSenderEmail: buyerEmail };

    const result = await clientProjectCollection.find(query).toArray();
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

const getAllPendingOrders = async (req, res) => {
  try {
    const query = { status: "pending" };

    const result = await clientProjectCollection.find(query).toArray();
    res.status(200).send({
      message: "successfully get all pending orders",
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

const getALlApproveOrders = async (req, res) => {
  try {
    const query = { status: "Inprogress" };

    const result = await clientProjectCollection.find(query).toArray();
    res.status(200).send({
      message: "successfully get all inprogress orders",
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

const getAllWorkingOrders = async (req, res) => {
  try {
    const query = { status: "Working" };
    const result = await clientProjectCollection.find(query).toArray();
    res.status(200).send({
      message: "successfully get all rejected orders",
      data: result,
    });
  } catch (error) {
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

const getAllCancelOrders = async (req, res) => {
  try {
    const query = { status: "Rejected" };

    const result = await clientProjectCollection.find(query).toArray();
    res.status(200).send({
      message: "successfully get all rejected orders",
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

const getActualBuyerProjectsByEmail = async (req, res) => {
  try {
    const result = await clientProjectCollection
      .find({ buyerEmail: req.params.email })
      .toArray();
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

const createOrderedProject = async (req, res) => {
  try {
    const blog = req.body;
    const result = await clientProjectCollection.insertOne(blog);
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

const updateOrderStatusById = async (req, res) => {
  const id = req.params.id;
  const order = { _id: new ObjectId(id) };
  const data = req.body;
  const option = { upsert: true };
  const updatedData = {
    $set: {
      admin: data.admin,
      status: data.status,
    },
  };
  const result = await clientProjectCollection.updateOne(
    order,
    updatedData,
    option
  );
  res.send(result);
};

const updateProjectContributorById = async (req, res) => {
  const id = req.params.id;
  const order = { _id: new ObjectId(id) };
  const data = req.body;
  const option = { upsert: true };
  const updatedData = {
    $set: {
      admin: data.admin,
      status: data.status,
      firstMember: data.firstMember,
      secondMember: data.secondMember,
      thirdMember: data.thirdMember,
      thirdMember: data.thirdMember,
      fourthMember: data.fourthMember,
      fourthMember: data.fourthMember,
    },
  };
  const result = await clientProjectCollection.updateOne(
    order,
    updatedData,
    option
  );
  res.send(result);
};

const deleteOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await clientProjectCollection.deleteOne(query);
    res.send({
      total: result.length,
      result: result,
    });
  } catch (error) {
    res.send({
      success: false,
      error: error,
    });
  }
};

export const ClientProjectsController = {
  getOrderedProjectsByEmail,
  getAllPendingOrders,
  getALlApproveOrders,
  getAllWorkingOrders,
  getAllCancelOrders,
  getActualBuyerProjectsByEmail,
  createOrderedProject,
  updateOrderStatusById,
  updateProjectContributorById,
  deleteOrderById,
};
