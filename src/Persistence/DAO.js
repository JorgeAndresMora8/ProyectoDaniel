import {
        UserModel, 
        ReviewModel, 
        ProductModel, 
        CarModel, 
        OrderModel        
        } from "./MongoDB/MongoConfig/mongoSchema.js"
import Container from "./MongoDB/MongoContainer.js";


export const UserDao = new Container(UserModel)
export const ReviewDao = new Container(ReviewModel)
export const ProductDao = new Container(ProductModel)
export const CarDao = new Container(CarModel)
export const OrderDao = new Container(OrderModel)

