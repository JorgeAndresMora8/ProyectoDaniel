import { Router } from "express";
import { renderProductForm, addProduct, 
    deleteProduct, 
    getByCategory, 
    getProductById, 
    getProducts, 
    updateProduct, 
    getProductByName} from "../controllers/StoreControllers.js";
import { authAdmin } from "../Auth/AuthAdmin.js";

export const StoreRouter = Router()

StoreRouter.get("/", await getProducts)
StoreRouter.get("/form", renderProductForm)
StoreRouter.get("/:id", await getProductById)
StoreRouter.get("/category/:category", await getByCategory)
StoreRouter.get("/search/:productName", await getProductByName)
StoreRouter.post("/", await addProduct)
StoreRouter.put("/:id", await updateProduct)
StoreRouter.delete("/:id", await deleteProduct)