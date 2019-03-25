/*
Import the internal libraries:
- PostController
*/
import { PostController } from '../controller';
const postController = new PostController();

const initializeEndpoints = (parentRouter) => {
    parentRouter.get('/posts', postController.index);
    parentRouter.get('/posts/:id', postController.show);   
    parentRouter.get('/posts/create', postController.create)
    parentRouter.post('/posts', postController.store)
    parentRouter.get('/posts/:id/edit', postController.edit)
    parentRouter.put('/posts/:id', postController.update)
    parentRouter.delete('/posts/:id', postController.destroy)
}
export default initializeEndpoints;