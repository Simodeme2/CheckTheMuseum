/*
Import the external libraries:
- express
*/
import express from 'express';

/*
Import the internal libraries:
- blog.routes.js
- category.routes.js
- post.routes.js
*/
import blogRouter from './blog.routes';
import categoryRouter from './category.routes';
import postRouter from './post.routes';
import userRouter from './user.routes';

// Define and initiate an express router
const apiV1Router = express.Router();
blogRouter(apiV1Router);
categoryRouter(apiV1Router);
postRouter(apiV1Router);
userRouter(apiV1Router);

export default apiV1Router;
