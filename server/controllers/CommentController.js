import CommentModel from "../models/Comment.js";
import PostModel from "../models/Post.js";

export const createComment = async (req, res) => {
    try {
        const newComment = await CommentModel.create({
            comment: req.body.comment,
            user: req.userId
        })

        const postId = req.params.id

        await PostModel.updateOne(
            {
                _id: postId
            },
            {
                $push: {comments: newComment._id}
            }
        )
        res.json(newComment)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось добавить комментарий',
        })
    }
}

export const getComments = async (req, res) => {
    /*try {
        const post = await PostModel.findById(req.params.id)
        const list = await Promise.all(
            post.comments.map((comment) => {
                return CommentModel.findById(comment)
            }),
        )
        res.json(list)
    } catch (error) {
        res.json({message: 'Что-то пошло не так.'})
    }*/

    try {
        const postId = req.params.id

        const post = await PostModel.findById(postId).populate('comments')

        if (!post) {
            return res.status(404).json({message: 'Новостной пост не найден'})
        }

        const comments = await CommentModel.find({_id: {$in: post.comments}}).populate('user')

        res.status(200).json(comments)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Произошла ошибка при получении комментариев'})
    }

}