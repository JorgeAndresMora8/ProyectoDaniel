import { Router } from "express";
import { addReview, getReviews } from "../controllers/ReviewController.js";

export const reviewRouter = Router()

reviewRouter.get("/", await getReviews)
reviewRouter.post("/", await addReview)
