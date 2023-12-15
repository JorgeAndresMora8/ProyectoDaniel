import express from "express"
import {StoreRouter} from "../routers/store.js"
import {orderRouter} from "../routers/order.js"
import {userRouter} from "../routers/user.js"
import {reviewRouter} from "../routers/review.js"
import { AuthRouter } from "../routers/auth.js"
import { AuthUser } from "../Auth/AuthMiddleware.js"
import { Homepage } from "../controllers/homepage.js"
import {pageNotFoundGET } from "../controllers/PageNotFound.js"
import cookieParser from "cookie-parser"
import cors from "cors"

export const app = express()


app.use(cors())

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

app.use(express.static("./public"))
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", "./views")

app.use("/api/user" ,userRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/products" , StoreRouter)
app.use("/api/order" ,orderRouter)
app.use("/api/reviews" ,reviewRouter)


app.get("/", Homepage)
app.get("*", pageNotFoundGET)

