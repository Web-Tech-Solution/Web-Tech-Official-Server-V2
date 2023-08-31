import express from "express";
import { ClientProjectsController } from "./clientProjects.controller";
import { ShowcaseProjectController } from "./showcaseProjects.controller";
import { SubmittedProjectController } from "./submittedProjects.controller";

const router = express.Router();

//* Get all Showcase Projects
router.get(
  "/all-showcaseProjects",
  ShowcaseProjectController.getAllShowcaseProjects
);

//* create showcase Project
router.post(
  "/create-showcaseProject",
  ShowcaseProjectController.createShowcaseProject
);

//* get all submitted projects ( done project of client )
router.get(
  "/all-submittedProject",
  SubmittedProjectController.getAllSubmittedProjects
);

//* create Submitted Project
router.post(
  "/create-submittedProject",
  SubmittedProjectController.createSubmittedProject
);

//* get all orderedProject ( search by buyer email )
router.get(
  "/orderedProject",
  ClientProjectsController.getOrderedProjectsByEmail
);

//* Get all pending orders
router.get("/all-pendingOrders", ClientProjectsController.getAllPendingOrders);

//* Get all approve orders
router.get("/all-approveOrders", ClientProjectsController.getALlApproveOrders);

//* Get all working orders
router.get("/all-workingOrders", ClientProjectsController.getAllWorkingOrders);

//* Get all cancel orders
router.get("/all-cancelOrders", ClientProjectsController.getAllCancelOrders);

//* Get actual Buyer projects by email address
router.get(
  "/actualBuyer/:email",
  ClientProjectsController.getActualBuyerProjectsByEmail
);

//* post data of client project ( which project is ordered by the client right now )
router.post(
  "/create-orderedProject",
  ClientProjectsController.createOrderedProject
);

//* update Order status for approval and cancellation
router.put(
  "/update-orderStatus/:id",
  ClientProjectsController.updateOrderStatusById
);

//* update project contributors (In - order list page)
router.put(
  "/update-contributors/:id",
  ClientProjectsController.updateProjectContributorById
);

//* Delete order by ID
router.delete("/delete-order/:id", ClientProjectsController.deleteOrderById);

export const ProjectRoutes = router;
