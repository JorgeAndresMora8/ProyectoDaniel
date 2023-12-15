import { reviewService } from "../apiArquitecture/Reviews/ReviewService.js";
import reviewValidations from "../apiArquitecture/Reviews/ReviewValidations.js";


//GET ALL THE REVIEWS
export async function getReviews(req, res){ 
    try{
        const reviewList = await reviewService.getReviews()
        res.status(200).json(reviewList)
    }   catch(error){ 
        res.status(400).json({"ERROR":`${error}`})
    }
}


//ADD NEW REVIEW
export async function addReview(req, res){ 
    try{ 
        const reviewData = req.body
        reviewValidations(req.body)
        await reviewService.saveReview(reviewData, req.user.email)
        res.redirect("/api/reviews")
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
    }
}



//DELETE A REVIEW
export async function deleteProduct(req, res) { 
    try{
        await reviewService.deleteReview(req.params.id, req.user.email)
        res.status(204).send(`Review with ID #${req.params.id} was deleted`)
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
    }
}