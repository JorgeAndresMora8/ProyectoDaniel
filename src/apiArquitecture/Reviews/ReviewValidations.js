export default function reviewValidations(reviewData){ 
    if (!reviewData.opinion) throw new Error("Review opinion missing"); 
    if (!reviewData.description) throw new Error("Review description missing"); 
}