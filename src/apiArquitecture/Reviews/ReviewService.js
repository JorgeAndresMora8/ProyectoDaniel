import createReview from "../../Utils/CreateReview.js"
import ReviewRepository from "./ReviewRepository.js"
import { ReviewDao } from "../../Persistence/DAO.js"

export default class ReviewService { 
    constructor(){ 
        this.repository = new ReviewRepository(ReviewDao)
    }

    async saveReview(review, userAuthor){      
        const reviewCreated = await createReview(review, userAuthor)
        await this.repository.save(reviewCreated)
    }

    async getReviews(){ 
        const reviewList = await this.repository.getAll()
        return reviewList.map(review => review.asDTO())
    } 

    async getReviewById(reviewID){ 
        const review = await this.repository.getById(reviewID)
        return review.asDTO()
    }

    async getReviewByAuthor(author){ 
        const reviewList = await this.repository.getByAuthor(author)
        return reviewList.map(review => review.asDTO())
    }

    async updateReview(reviewId, review, current_user) { 

        const reviewExits = await this.getReviewById(reviewId)
        if (reviewExits.author != current_user){ 
            throw new Error("You arent the author of this review")
        }

        await this.repository.update(reviewId, review)
        return await this.repository.getById(reviewId)
        
    }

    async deleteReview(reviewId, current_user){ 
        const reviewExits = await this.getReviewById(reviewId)
        if (reviewExits.author != current_user){ 
            throw new Error("Only the user who created this post can deleted")
        }
        await this.repository.delete(reviewId)
    }

}

export const reviewService = new ReviewService()