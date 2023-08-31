import express from "express";
import { ServiceController } from "./service.controller";

const router = express.Router();

// get all services
router.get("/all-services", ServiceController.getAllServices);

// get service (Category) from Admin Dashboard
router.get("/all-services/admin", ServiceController.getServicesFromAdmin);

// add a service (Category) from Admin Dashboard
router.post("/create-service", ServiceController.createService);

export const ServiceRoutes = router;
