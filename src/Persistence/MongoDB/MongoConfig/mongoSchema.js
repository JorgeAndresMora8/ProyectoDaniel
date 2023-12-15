import {mongoose} from "mongoose"


const ReviewSchema = new mongoose.Schema({ 
    id: {type:String, required:true}, 
    author: {type:String, required:true}, 
    opinion: {type:String, required:true}, 
    description: {type:String, required:true}
})


const productSchema = new mongoose.Schema({ 
    id: {type:String, required: true}, 
    name: {type:String, required:true}, 
    category: {type:String, required:true}, 
    price:{type:Number, required:true},
    units:{type:Number, required:true}, 
    image:{type:String, required:true}
})


const UserSchema = new mongoose.Schema({ 
    id:{type:String, required:true}, 
    name: {type:String, required:true}, 
    email: {type:String, required:true}, 
    password: {type:String, required:true}, 
})

const CarSchema = new mongoose.Schema({
    id:{type:String, required:true}, 
    clientId:{type:String, required:true}, 
    prods: []
})



const OrderSchema = new mongoose.Schema ({
    id:{type:String, required:true}, 
    clientName:{type:String, required:true}, 
    clientEmail:{type:String, required:true}, 
    date:{type:String, required:true}, 
    products:{type:Array, required:true},
    total:{type:Number, required:true}
})

//Models 
export const UserModel = mongoose.model("users", UserSchema)
export const ProductModel = mongoose.model("products", productSchema)
export const ReviewModel = mongoose.model("review", ReviewSchema)
export const CarModel = mongoose.model("cars", CarSchema)
export const OrderModel = mongoose.model("orders", OrderSchema)
