"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

/*
Import the external libraries:
- dotenv
*/
// Activatie the dotenv settings from .env file
_dotenv.default.config(); // Create configuration object


var config = {
  nodeEnvironment: process.env.NODE_ENV,
  nodeHostname: process.env.NODE_SERVER_HOSTNAME,
  nodePort: process.env.NODE_SERVER_PORT,
  mongoDbConnectionstring: process.env.MONGODB_CONNECTION
};
var _default = config;
exports.default = _default;