"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _post = _interopRequireDefault(require("./post.routes"));

/*
Import the external libraries:
- express
*/

/*
Import the internal libraries:
- post.routes.js
*/
// Define and initiate an express router
var apiV1Router = _express.default.Router();

(0, _post.default)(apiV1Router);
var _default = apiV1Router;
exports.default = _default;