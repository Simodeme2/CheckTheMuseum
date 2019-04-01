/*
Import the external libraries:
- uuidv4
*/
import uuidv4 from 'uuid/v4';

/*
Import the internal libraries:
- * from database
- errorHandler
*/
import { Post } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class PostController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const posts = await Post.find().sort( { created_at: -1 } ).exec();

            if (posts === undefined || posts === null) {
                throw new APIError(404, 'Collection for posts not found!');
            }
            res.status(200).json(posts);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving posts', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => { 
        try {
            const { id } = req.params;
            const item = await Post.findById(id).exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Post with id: ${id} not found!`);
            }
            res.status(200).json(item);
        } catch (err) {
            handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving posts', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            categories: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {        
        try {
            const postCreate = new Post({
                title: req.body.title,
                synopsis: req.body.synopsis,
                body: req.body.body,
            });
            const post = await postCreate.save();
            res.status(201).json(post);
        } catch (err) {
            handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Post!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const post = await Post.findById(id).exec();

            if (!post) {
                throw new APIError(404, `Post with id: ${id} not found!`);
            } else {
                const vm = {
                    post: post,
                    categories: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Post with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {  
        const { id } = req.params;

        try {
            const postUpdate = req.body;
            const post = await Post.findOneAndUpdate({ _id: id }, postUpdate, { new: true }).exec();

            if (!post) {
                throw new APIError(404, `Post with id: ${id} not found!`);
            } else {
                res.status(200).json(post);
            }
        } catch (err) {
            handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Post with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => { 
        const { id } = req.params;

        try {
            const post = await Post.findOneAndRemove({ _id: id });
  
            if (!post) {
                throw new APIError(404, `Post with id: ${id} not found!`);
            } else {
                res.status(200).json({ message: `Successful deleted the Post with id: ${id}!` });
            }
        } catch (err) {
            handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Post with id: ${id}!`, next);
        }
    }
}

export default PostController;
