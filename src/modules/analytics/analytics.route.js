import express from "express";
import { AnalyticsController } from "./analytics.controller";

const router = express.Router();

router.get("/all-analytics", AnalyticsController.getAnalytics);

export const analyticsRoutes = router;
