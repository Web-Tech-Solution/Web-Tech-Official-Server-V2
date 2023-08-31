import express from "express";
import { ReviewController } from "./review.controller";

const router = express.Router();

//* Get all reviews
router.get("/all-reviews", ReviewController.getAllReviews);

//* add a review (Feedback)
router.post("/create-review", ReviewController.createReview);

export const ReviewRoutes = router;
