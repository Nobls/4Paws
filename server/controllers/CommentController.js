import CommentModel from "../models/Comment.js";
import PostModel from "../models/Post.js";


/*export const createComment = async (req, res) => {
    try {
        const { postId, comment } = req.body

        if (!comment)
            return res.json({ message: 'Комментарий не может быть пустым' })

        const newComment = new CommentModel({ comment })
        await newComment.save()

        try {
            await PostModel.findByIdAndUpdate(postId, {
                $push: { comments: newComment._id },
            })
        } catch (error) {
            console.log(error)
        }

        res.json(newComment)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}*/

export const createComment = async (req, res) => {
    try {
        const doc = new CommentModel({
            comment: req.body.comment,
            user: req.userId
        })
        const newComment = await doc.save()

        try {
            const postId = req.params.id
            await PostModel.updateOne(
                {
                    _id: postId
                },
                {
                    $push: {comments: newComment._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newComment)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось добавить комментарий',
        })
    }
}

export const getComments = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id)
        const list = await Promise.all(
            post.comments.map((comment) => {
                return CommentModel.findById(comment)
            }),
        )
        res.json(list)
    } catch (error) {
        res.json({message: 'Что-то пошло не так.'})
    }
}