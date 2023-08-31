// const client = require('../../../index.js');
import client from "../../../index";

const usersCollection = client
  .db("webTech-solution-official")
  .collection("users");

const getAllUsers = async (req, res) => {
  const result = await usersCollection.find({}).toArray();
  res.send(result);
};

const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = { email: email };
    const result = await usersCollection.findOne(user);
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

const getAllProvableBuyers = async (req, res) => {
  try {
    const result = await usersCollection.find({ role: "User" }).toArray();
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

const getProvableBuyerByEmail = async (req, res) => {
  try {
    const result = await usersCollection.findOne({
      email: req.params.email,
      role: "User",
    });
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

const getAllActualBuyers = async (req, res) => {
  try {
    const result = await usersCollection.find({ role: "Buyer" }).toArray();
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

const getSpecificUserByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    console.log(query);
    const result = await usersCollection.findOne(query);
    console.log(result);
    res.status(200).send({
      message: "Success to gat user",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: "Operation failed to get specific user ! for some issue!",
      data: null,
    });
  }
};

const createUser = async (req, res) => {
  const user = req.body;
  const email = user.email;
  const filter = await usersCollection.findOne({ email: email });

  const usersList = await usersCollection.count({});

  if (filter === null) {
    if (usersList !== 0) {
      res.send((result = await usersCollection.insertOne(req.body)));
    } else {
      const user = req.body;
      user.role = "Admin";
      const result = await usersCollection.insertOne(user);
      res.send(result);
    }
  } else {
    res.status(400).json({ errors: [{ msg: "User already exists" }] });
  }
};

//* update user role by clicking approve in order request page
const updateUserRoleByApproval = async (req, res) => {
  try {
    const userEmail = req.query.email;
    const data = req.body;
    const query = { email: userEmail };
    const option = { upsert: true };
    const updatedData = {
      $set: data,
    };
    const result = await usersCollection.updateOne(query, updatedData, option);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

export const UserController = {
  getAllUsers,
  getUserByEmail,
  getAllProvableBuyers,
  getProvableBuyerByEmail,
  getAllActualBuyers,
  getSpecificUserByEmail,
  createUser,
  updateUserRoleByApproval,
};
