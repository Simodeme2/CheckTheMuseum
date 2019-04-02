"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = require("../controller");

/*
Import the internal libraries:
- PostController
*/
// Create instance of PostController otherwise you can't use it
var postController = new _controller.PostController();

var initializeEndpoints = function initializeEndpoints(parentRouter) {
  /**
   * @swagger
   * /api/v1/posts:
   *   get:
   *     summary: List all the posts
   *     description: Returns a list of all the posts, optionally sorted
   *     tags:
   *       - posts
   *     responses:
   *       200:
   *         description: List of posts
   *         schema:
   *           type: array
   */
  parentRouter.get('/posts', postController.index);
  parentRouter.get('/posts/create', postController.create);
  parentRouter.get('/posts/:id', postController.show);
  parentRouter.post('/posts', postController.store);
  parentRouter.get('/posts/:id/edit', postController.edit);
  parentRouter.put('/posts/:id', postController.update);
  parentRouter.delete('/posts/:id', postController.destroy);
};

var _default = initializeEndpoints;
exports.default = _default;