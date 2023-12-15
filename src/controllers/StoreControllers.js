import { Router } from "express";
import { Store } from "../apiArquitecture/Product/StoreService.js";
import { updateProductValidation } from "../Resorces/ensureCorrectData.js";


export async function getProducts(req, res){ 

    try{
        const products = await Store.getAllProducts()
        res.cookie('cookieName',"randomNumber", { maxAge: 900000, httpOnly: true })
        res.status(200).json(products)
    }   catch(err){ 
        res.status(400).json({"ERROR":`${err}`})
    }
}

//END POINT SEARCH PRODUCT
export async function getProductByName(req, res){ 
    try{ 
        const ProductNameQuery = req.params.productName
        // const ProductName = ProductNameQuery.replace("-", " ")
        const products = await Store.getByName(ProductNameQuery)
        res.status(200).json(products)
    }   catch(error){ 
        res.status(400).json({"ERROR":`${error}`})
    }
}

export async function renderProductForm(req, res){ 
    res.render("addProductForm")
}

export async function getByCategory(req, res) {

    try{ 
        const CategoryParams = req.params.category
        const productCategoryQuery = CategoryParams.replace("-", " ");
        const productList = await Store.getByCategory(productCategoryQuery)
        res.status(200).json(productList)
    }   catch(error){ 
        res.status(400).json({"ERROR":`${err}`})
    }
}


export async function addProduct(req, res) { 
        try{ 
            await Store.save(req.body)
            res.status(200).json({'SUCCESS':"Product added succesfully"})
        }   catch(error){ 
            res.status(400).json({"ERROR":`${err}`})
        }
}

export async function updateProduct(req, res) { 
    try{
        const ProductId = req.params.id
        const newProductInfo = req.body
        await updateProductValidation(newProductInfo)
        const product = await Store.updateProduct(ProductId, newProductInfo)
        res.status(201).json({ 
        Success:"Product updated", 
        product
    })
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
    }
}

export async function deleteProduct(req, res){ 
    try{
        await Store.delete(req.params.id)
        res.status(204).json("PRODUCT DELETED SUCCESFULLY")
    }   catch(error){ 
        res.status(400).json({"ERROR":"PRODUCT NOT FOUND"})
    }
}

export async function getProductById(req, res){ 
    try{
        const product = await Store.getById(req.params.id)
        res.status(200).json(product)
    }   catch(err){ 
        res.status(400).json({ERROR:`PRODUCT NOT FOUND`})
    }
}