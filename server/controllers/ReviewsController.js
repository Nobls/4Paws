import ReviewModel from "../models/Reviews.js";
import UserModel from "../models/User.js";

export const createReview = async (req, res) => {
    try {
        const newReview = await ReviewModel.create({
            review: req.body.review,
            user: req.userId,
            dateReview: req.body.dateReview
        })

        const userReviewId = req.params.id

        await UserModel.findByIdAndUpdate(
            userReviewId,
            {
                $push: {reviews: newReview._id}
            }
        )

        res.json(newReview)

    } catch (error) {
        res.status(500).json({
            message: 'Не удалось добавить отзывы'
        })
    }
}

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await ReviewModel.find().populate('user').exec()

        res.json(reviews)
    } catch (error) {
        console.log(error)
    }
}