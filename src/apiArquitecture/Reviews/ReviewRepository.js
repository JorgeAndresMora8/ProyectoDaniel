import Review from "./Review.js"

export default class ReviewRepository { 
    constructor(dao){ 
        this.dao = dao
    }

    async save(review){ 
        await this.dao.save(review.asDTO())
    }

    async getAll(){ 
        const reviewList = await this.dao.getAll()
        return reviewList.map(review => new Review(review))
    }

    async getById(reviewId){ 
        const review = await this.dao.getById(reviewId)
        if (review == undefined || null){ 
            throw new Error("NOT FOUND")
        }
        return new Review(review)
    }

    async getByAuthor(author){ 
        const reviewList = await this.dao.getByAuthor(author)
        return reviewList.map(review => new Review(review))
    }

    async update(reviewId, reviewData) { 
        await this.dao.update(reviewId, reviewData)
    }

    async delete(reviewId){ 
        await this.dao.deleteById(reviewId)
    }
}