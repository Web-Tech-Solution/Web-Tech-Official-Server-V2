// const express = require('express')
// const cors = require('cors')
const colors = require("colors");
// const jwt = require('jsonwebtoken')
const dotenv = require("dotenv").config();
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const sendMailToClient = require("./utilities/mailToClient");
// const sendMailToDev = require('./utilities/mailToDev');
// const { routes } = require('./src/routes');

import cors from "cors";
import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import routes from "./src/routes";

const app = express();
const port = process.env.PORT || 5000;

//! Middleware's..........
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.aen0d89.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//! database connection check by this function
async function dbConnect() {
  try {
    await client.connect();
    console.log("connected with mongodb".blue.bold);
  } catch {
    (err) => console.log(err);
  }
}
dbConnect();

//! Collections...........................................
// const usersCollection = client.db("webTech-solution-official").collection("users");
// const teamMembersCollection = client.db("webTech-solution-official").collection("teamMembers");
// const blogsCollection = client.db("webTech-solution-official").collection("blogs");
// const blogCommentsCollection = client.db("webTech-solution-official").collection("blogComments");

// const reviewsCollection = client.db("webTech-solution-official").collection("reviews");

// const ourServicesCollection = client.db("webTech-solution-official").collection("ourServices");

// const ourShowcaseProjectCollection = client.db("webTech-solution-official").collection("Showcase-Projects");

// const submittedProjectCollection = client.db("webTech-solution-official").collection("project");
// const clientProjectCollection = client.db("webTech-solution-official").collection("clientProject");

// const meetLinksCollection = client.db("webTech-solution-official").collection("Meet-Links");

// const analyticsCollection = client.db("webTech-solution-official").collection("analytics");

app.use("/api/v1/", routes);

//! GET APIS................................................

//* get user by email
// api end point: "/user/:email"
// app.get("/email/:email", async (req, res) => {
//   try {
//     const email = req.params.email;
//     const user = { email: email };
//     const result = await usersCollection.findOne(user);
//     res.send({
//       total: result.length,
//       result: result,
//     });
//   } catch (error) {
//     res.send({
//       success: false,
//       error: error,
//     });
//   }
// });

// ** Get all users
// api end point: /user/all-users
// app.get('/all-users', async(req, res) => {
//   const result = await usersCollection.find({}).toArray();
//   res.send(result);
// })

//* Get all analytics for Home page
// api end point: /analytic/all-analytics
// app.get('/get/all-analytics', async(req, res) => {
//   const result = await analyticsCollection.find({}).toArray();
//   res.send(result);
// })

//* find all blogs
// api end point: /blog/all-blogs
// app.get('/blogs',async(req,res)=>{
//   try {
//     const query = {}
//     const result = await blogsCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully found",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* find all blogs  expect a specific blog
// api end point: /blogs/rest-blogs/:id
// app.get('/rest-blogs/:id', async(req,res)=>{
//   try {
//     const blogId = req.params.id;
//     const query = {_id: {$ne: new ObjectId(blogId)}}
//     const result = await blogsCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully found",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* find a specific post by id
// api end point: /blog/:id
// app.get('/blog/dynamic/:id',async(req,res)=>{
//   try {
//     const id = req.params.id;
//     const query = {_id: new ObjectId(id)}
//     const result = await blogsCollection.findOne(query)
//     res.status(200).send({
//       message:"successfully found",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* find a specific post comments
// api end point: /blog/blogComment/:id
// app.get('/blogsComments/:id',async(req,res)=>{
//   try {
//     const id = req.params.id;
//     const query = {blogID:id}
//     const result = await blogCommentsCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully found",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* get all submitted projects ( done project of client )
// api end point: project/all-submittedProject
// app.get('/submittedProject',async(req,res)=>{
//   try {
//     const query = {}
//     const result = await submittedProjectCollection.find(query).toArray()
//       if(result.length !== 0){
//         res.status(200).send({
//           message:"successfully found",
//           data: result,
//         })
//       }
//       else{
//         res.status(200).send({
//           message:"no data",
//           data: result,
//         })
//       }

//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* get all orderedProject by email ( search by buyer email )
// api end point: /project/orderedProject
// app.get('/orderedProject',async(req,res)=>{
//   try {
//     const buyerEmail = req.query.email;
//     const query = {orderSenderEmail:buyerEmail}

//     const result = await clientProjectCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully posted",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get all pending orders
// api end point: /project/all-pendingOrders
// app.get('/all-pending-orders',async(req,res)=>{
//   try {
//     const query = {status: 'pending'}

//     const result = await clientProjectCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully get all pending orders",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get all approve orders
// api end point: /project/all-approveOrders
// app.get('/all-approve-orders',async(req,res)=>{
//   try {
//     const query = {status: 'Inprogress'}

//     const result = await clientProjectCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully get all inprogress orders",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get all working orders
// api end point: /project/all-workingOrders
// app.get('/all-working-orders',async(req,res)=>{
//   try {
//     const query = {status: 'Working'}
//     const result = await clientProjectCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully get all rejected orders",
//       data: result,
//     })
//   } catch (error) {
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get all cancel orders
// api end point: /project/all-cancelOrders
// app.get('/all-cancel-orders',async(req,res)=>{
//   try {
//     const query = {status: 'Rejected'}

//     const result = await clientProjectCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully get all rejected orders",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get all reviews
// api end point: /review/all-reviews
// app.get('/get-all-reviews',async(req,res)=>{
//   try {
//     const query = {}

//     const result = await reviewsCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully get all rejected orders",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get all Showcase Projects
// api end point: /project/all-showcaseProjects
// app.get('/get/all/showcase/projects',async(req,res)=>{
//   try {
//     const query = {}
//     const result = await ourShowcaseProjectCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully get all services",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get all services (Category)
// api end point: /service/all-services
// app.get('/get-all-services',async(req,res)=>{
//   try {
//     const query = {}
//     const result = await ourServicesCollection.find(query).toArray()
//     res.status(200).send({
//       message:"successfully get all services",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get all provable Buyer information
// api end point: /user/all-provableBuyer
// app.get('/get/all/provable/buyer',async(req,res)=>{
//   try {

//     const result = await usersCollection.find({ role : "User" }).toArray()
//     res.status(200).send({
//       message:"successfully get all services",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* get provable buyer by email
// api end point: /user/provableBuyer/:email
// app.get('/get/dynamic/provable/buyer/:email',async(req,res)=>{
//   try {

//     const result = await usersCollection.findOne({ email: req.params.email, role : "User"})
//     res.status(200).send({
//       message:"successfully get all services",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get all actual Buyer information
// api end point: /user/all-actualBuyer
// app.get('/get/all/actual/buyer',async(req,res)=>{
//   try {

//     const result = await usersCollection.find({ role : "Buyer" }).toArray()
//     res.status(200).send({
//       message:"successfully get all services",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get dynamic actual Buyer information
// api end point: project/actualBuyer/:email
// app.get('/get/dynamic/actual/buyer/:email',async(req,res)=>{
//   try {
//     const result = await clientProjectCollection.find({ buyerEmail : req.params.email}).toArray();
//     res.status(200).send({
//       message:"successfully get all services",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* Get specific user information by email (Email sender)
// api end point: /user/specificUser
// app.get('/get-specificUser', async (req,res) => {
//   try {
//     const email = req.query.email;
//     const query = {email : email};
//     console.log(query);
//     const result = await usersCollection.findOne(query);
//     console.log(result);
//     res.status(200).send({
//       message: "Success to gat user",
//       data: result
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({
//       message: "Operation failed to get specific user ! for some issue!",
//       data: null
//     })
//   }
// })

//* Get daily scrum link
// api end point: /meetLink/daily-scrum/:id
// app.get('/get/daily/scrum/:id',async(req,res)=>{
//   try {

//     console.log(req.params.id);
//     const query = { _id : new ObjectId(req.params.id) }
//     const result = await meetLinksCollection.findOne(query)
//     res.status(200).send({
//       message:"successfully get all services",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* get service (Category) from Admin Dashboard
// api end point: /service/all-services/admin
// app.get('/get/service/admin',async(req,res)=>{
//   try {
//     // console.log('running');
//     const result = await ourServicesCollection.find({}).toArray();
//     res.status(200).send({
//       message:"successfully posted",
//       data: result,
//     })
//   } catch (error) {
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* get all team members information
// api end point: /teamMember/all-teamMembers
// app.get('/team-member-data',async(req,res)=>{
//   try {
//     const query = {}
//     const result = await teamMembersCollection.find(query).toArray();
//     res.status(200).send({
//       message:"successfully posted",
//       data: result,
//     })
//   } catch (error) {
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//! POST API's...............................................

// post mail

// /sendMail/mailToClient
// app.post("/mailToClient", sendMailToClient);

// /sendMail/mailToDev
// app.post("/mailToDev", sendMailToDev);

//* create a new user
// api end point: /user/create-user
// app.post('/user', async (req, res) => {
//   const user = req.body;
//   const email = user.email;
//   const filter = await usersCollection.findOne({ email: email });

//   const usersList = await usersCollection.count({});

//   if (filter === null) {
//     if (usersList !== 0) {
//         res.send((result = await usersCollection.insertOne(req.body)));
//     }
//     else {
//       const user = req.body;
//       user.role = 'Admin';
//       const result = await usersCollection.insertOne(user);
//       res.send(result);
//     }
//   }
//   else {
//     res.status(400).json({ errors: [{ msg: "User already exists" }] });
//   }
// });

//* add a single article to database
// api end point: /blog/create-blog
// app.post('/blogs',async(req,res)=>{
//   try {
//     const blog = req.body;
//     const result = await blogsCollection.insertOne(blog)
//     res.status(200).send({
//       message:"successfully posted",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* add a single article to database
// api end point: /blog/create-blogComment
// app.post('/blogsComments',async(req,res)=>{
//   try {
//     const blogComments = req.body;
//     const result = await blogCommentsCollection.insertOne(blogComments)
//     res.status(200).send({
//       message:"successfully posted",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* add a review (Feedback)
// api end point: /review/create-review
// app.post('/add/review',async(req,res)=>{
//   try {
//     const review = req.body;
//     const result = await reviewsCollection.insertOne(review)
//     res.status(200).send({
//       message:"successfully posted",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* create ordered project of client project ( which project is ordered by the client )
// api end point: /project/create-orderedProject
// app.post('/orderedProject',async(req,res)=>{
//   try {
//     const blog = req.body;
//     const result = await clientProjectCollection.insertOne(blog)
//     res.status(200).send({
//       message:"successfully posted",
//       data: result,
//     })
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* create Submitted Project
// api end point: /project/create-submittedProject
// app.post('/submittedProject',async(req,res)=>{
//   try {
//     const blog = req.body;
//     const result = await submittedProjectCollection.insertOne(blog)
//     res.status(200).send({
//       message:"successfully posted",
//       data: result,
//     })
//   } catch (error) {
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* create showcase Project
// api end point: /project/create-showcaseProject
// app.post('/post/new/showcase/project',async(req,res)=>{
//   try {
//     const blog = req.body;
//     const result = await ourShowcaseProjectCollection.insertOne(blog)
//     res.status(200).send({
//       message:"successfully posted",
//       data: result,
//     })
//   } catch (error) {
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//* add a service (Category) from Admin Dashboard
// api end point: /service/create-service
// app.post('/add/service/admin',async(req,res)=>{
//   try {
//     const service = req.body;
//     const result = await ourServicesCollection.insertOne(service)
//     res.status(200).send({
//       message:"successfully posted",
//       data: result,
//     })
//   } catch (error) {
//     res.status(404).send({
//       message: "Operation failed! for some issue!",
//       data: null,
//     });
//   }
// })

//! DELETE APIS ............................................

//* Delete order by it's ID
// api end point: project/delete-order/:id
// app.delete("/order-permanently-delete/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const query = { _id: new ObjectId(id) };
//     const result = await clientProjectCollection.deleteOne(query);
//     res.send({
//       total: result.length,
//       result: result,
//     });
//   } catch (error) {
//     res.send({
//       success: false,
//       error: error,
//     });
//   }
// });

//! UPDATE APIS ............................................

//* update user role by clicking approve in order request page
// api end point: /user/role-update
// app.put("/user-role-update/order-approve", async (req, res) => {
//   try {
//     const userEmail = req.query.email;
//     const data = req.body;
//     const query = { email:userEmail };
//     const option = { upsert: true };
//     const updatedData = {
//       $set: data,
//     };
//     const result = await usersCollection.updateOne(query, updatedData, option);
//     res.send(result);

//   } catch (error) {
//     console.log(error);
//   }
// });

//* update Order status for approval and cancellation
// api end point: project/update-orderStatus/:id
// app.put("/order-status-update/:id", async (req, res) => {
//   const id = req.params.id;
//   const order = { _id: new ObjectId(id) };
//   const data = req.body;
//   const option = { upsert: true };
//   const updatedData = {
//     $set: {
//       admin: data.admin,
//       status: data.status,
//     },
//   };
//   const result = await clientProjectCollection.updateOne(order, updatedData, option);
//   res.send(result);
// });

//* update user role by clicking approve in order request page  *** (maybe not necessary) ***

// app.put("/order-user-role-update/:email", async (req, res) => {
//   // console.log('Now hit');
//   const email = req.params.email;
//   const order = { email : email };
//   const data = req.body;
//   console.log(data);
//   const option = { upsert: true };
//   const updatedData = {
//     $set: {
//       role: data.role,
//     },
//   };
//   const result = await usersCollection.updateOne(order, updatedData, option);
//   // console.log(result);
//   res.send(result);
// });

//* update project contributors (In - order list page)
// api end point: /project/update-contributors/:id
// app.put("/project-contributors-update/:id", async (req, res) => {
//   const id = req.params.id;
//   const order = { _id: new ObjectId(id) };
//   const data = req.body;
//   const option = { upsert: true };
//   const updatedData = {
//     $set: {
//       admin: data.admin,
//       status: data.status,
//       firstMember: data.firstMember,
//       secondMember: data.secondMember,
//       thirdMember: data.thirdMember,
//       thirdMember: data.thirdMember,
//       fourthMember: data.fourthMember,
//       fourthMember: data.fourthMember,
//     },
//   };
//   const result = await clientProjectCollection.updateOne(order, updatedData, option);
//   res.send(result);
// });

//!...

app.get("/", (req, res) => {
  res.send("server is running !!! ");
});

app.all("*", (req, res) => {
  res.send("No Route Found... !!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default client;
