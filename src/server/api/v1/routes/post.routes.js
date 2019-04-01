/*
Import the internal libraries:
- PostController
*/
import { PostController } from '../controller';
const postController = new PostController();

const initializeEndpoints = (parentRouter) => {
    /**
     * @swagger
     * /api/v1/posts:
     *   get:
     *     summary: List all the posts
     *     description: Returns a list of all the animals, optionally sorted
     *     tags:
     *       - posts
     *     responses:
     *       200:
     *         description: List of posts
     *         schema:
     *           type: array
     */
    parentRouter.get('/posts', postController.index);
    parentRouter.get('/posts/create', postController.create)
    parentRouter.get('/posts/:id', postController.show);   
    parentRouter.post('/posts', postController.store)
    parentRouter.get('/posts/:id/edit', postController.edit)
    parentRouter.put('/posts/:id', postController.update)
    parentRouter.delete('/posts/:id', postController.destroy)
}
export default initializeEndpoints;