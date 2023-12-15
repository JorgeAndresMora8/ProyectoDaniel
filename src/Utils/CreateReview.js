import Review from "../apiArquitecture/Reviews/Review.js"
import createID from "../Resorces/CreateID.js"


//This function will create the review and return its DTO
export default function createReview(reviewData, userAuthor){ 
    
    //Adding the id to the review
    reviewData['id'] = createID()
    reviewData['author'] = userAuthor
    const newReview = new Review(reviewData)
    return newReview
}