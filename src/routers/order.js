import {Router} from "express"
import { createOrder, getOrders } from "../controllers/OrderController.js"

export const orderRouter = Router()

orderRouter.post("/", await createOrder)
orderRouter.get("/", await getOrders)
