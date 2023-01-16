import PostModel from '../models/Post.js'
import CommentModel from "../models/Comment.js";

export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().sort({createdAt: -1}).populate('user').exec();// добавил .sort({createdAt: -1}) чтобы показывало последние новости

        res.json(posts);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить статьи',
        })
    }
};

/*export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().sort({createdAt: -1}).exec();// добавил .sort({createdAt: -1}) чтобы показывало последние новости

        if (!posts) {
            return res.json({
                message: 'Нет постов.'
            })
        }

        res.json(posts);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить статьи',
        })
    }
};*/

export const getLastTags = async (req, res) => {
    try {
        const posts = await PostModel.find().limit(5).exec();

        const tags = posts.map(m=> m.tags).flat().slice(0,5)

        res.json(tags);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить статьи',
        })
    }
};

export const getOne = async (req, res) => {
    try {

        const postId = req.params.id

        PostModel.findOneAndUpdate(
            {
                _id: postId,
            },
            {
                $inc: {viewsCount: 1}
            },
            {
                returnDocument: 'after',
            },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Не удалось получить статью',
                    })
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Статья не найдена'
                    })
                }

                res.json(doc)
            },
        ).populate('user');

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить статью',
        })
    }
};

/*export const getOne = async (req, res) => {
    try {

        const postId = req.params.id

        PostModel.findOneAndUpdate(
            {
                _id: postId,
            },
            {
                $inc: {viewsCount: 1}
            },
            {
                returnDocument: 'after',
            },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Не удалось получить статью',
                    })
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Статья не найдена'
                    })
                }

                res.json(doc)
            },
        )

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить статью',
        })
    }
};*/

export const remove = async (req, res) => {
    try {

        const postId = req.params.id;

        PostModel.findOneAndDelete(
            {
                _id: postId
            },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Не удалось удалить статью',
                    })
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Статья не найдена'
                    })
                }

                res.json({
                    success: true
                })
            }
        )

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить статью',
        })
    }
};

/*export const remove = async (req, res) => {
    try {
        const post = await PostModel.findByIdAndDelete(req.params.id)
        if (!post) return res.json({ message: 'Такого поста не существует' })

        await UserModel.findByIdAndUpdate(req.userId, {
            $pull: { posts: req.params.id },
        })

        res.json({ message: 'Пост был удален.' })
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
};*/

export const update = async (req, res) => {
    try {
        const postId = req.params.id;

        await PostModel.updateOne(
            {
                _id: postId
            },
            {
                title: req.body.title,
                text: req.body.text,
                imageUrl: req.body.imageUrl,
                tags: req.body.tags,
                date: req.body.date
            }
        )

        res.json({
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить статью',
        })
    }
}

/*export const update = async (req, res) => {
    try {
        const { title, text, tags, imageUrl, id } = req.body
        const post = await PostModel.findById(id)

        post.title = title
        post.text = text
        post.tags = tags
        post.imageUrl = imageUrl

        await post.save()

        res.json(post)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}*/

export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags.split(','),
            user: req.userId,
            date: req.body.date
        });

        const post = await doc.save();

        res.json(post);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать статью',
        })
    }
};

/*export const create = async (req, res) => {
   try {
       const {title, text, tags, imageUrl} = req.body
       const user = await UserModel.findById(req.userId)

       const newPost = new PostModel({
           user: user.fullName,
           title,
           text,
           tags,
           imageUrl,
       })

       await newPost.save()
       await UserModel.findByIdAndUpdate(req.userId,{
           $push: {
               posts: newPost
           }
       })

       return res.json(newPost)

   } catch(error){
       console.log(error)
   }
};*/

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
        res.json({ message: 'Что-то пошло не так.' })
    }
}
