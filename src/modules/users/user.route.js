import express from "express";
import { UserController } from "./user.controller";
// const { getAllUsers, getUserByEmail, getAllProvableBuyers } = require('./user.controller.js')

const router = express.Router();

// get all users
router.get("/all-users", UserController.getAllUsers);

// get user by email
router.get("/:email", UserController.getUserByEmail);

// get all provable buyers
router.get("/all-provableBuyer", UserController.getAllProvableBuyers);

// get provable buyer by email
router.get("/provableBuyer/:email", UserController.getProvableBuyerByEmail);

// get all actual buyers
router.get("/all-actualBuyer", UserController.getAllActualBuyers);

// Get specific user information by email (Email sender)
router.get("/specificUser", UserController.getSpecificUserByEmail); // * repeated route * //

// create a user
router.post("/create-user", UserController.createUser);

// update user role by clicking approve in order request page
router.put("/role-update", UserController.updateUserRoleByApproval);

export const UserRoutes = router;
