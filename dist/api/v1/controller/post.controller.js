"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _database = require("../database");

var _utilities = require("../../../utilities");

/*
Import the external libraries:
- uuidv4
*/

/*
Import the internal libraries:
- * from database
- errorHandler
*/
var PostController = function PostController() {
  (0, _classCallCheck2.default)(this, PostController);
  (0, _defineProperty2.default)(this, "index",
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(req, res, next) {
      var posts;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _database.Post.find().sort({
                created_at: -1
              }).exec();

            case 3:
              posts = _context.sent;

              if (!(posts === undefined || posts === null)) {
                _context.next = 6;
                break;
              }

              throw new _utilities.APIError(404, 'Collection for posts not found!');

            case 6:
              return _context.abrupt("return", res.status(200).json(posts));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", (0, _utilities.handleAPIError)(500, _context.t0.message || 'Some error occurred while retrieving posts', next));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "show",
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(req, res, next) {
      var id, item;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              id = req.params.id;
              _context2.next = 4;
              return _database.Post.findById(id).exec();

            case 4:
              item = _context2.sent;

              if (!(item === undefined || item === null)) {
                _context2.next = 7;
                break;
              }

              throw new _utilities.APIError(404, "Post with id: ".concat(id, " not found!"));

            case 7:
              res.status(200).json(item);
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              (0, _utilities.handleAPIError)(_context2.t0.status || 500, _context2.t0.message || 'Some error occurred while retrieving posts', next);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "create", function (req, res) {
    var vm = {
      categories: []
    };
    return res.status(200).json(vm);
  });
  (0, _defineProperty2.default)(this, "store",
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(req, res, next) {
      var postCreate, post;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              postCreate = new _database.Post({
                title: req.body.title,
                synopsis: req.body.synopsis,
                body: req.body.body
              });
              _context3.next = 4;
              return postCreate.save();

            case 4:
              post = _context3.sent;
              res.status(201).json(post);
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              (0, _utilities.handleAPIError)(_context3.t0.status || 500, _context3.t0.message || 'Some error occurred while saving the Post!', next);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "edit",
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(req, res, next) {
      var id, post, vm;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              _context4.prev = 1;
              _context4.next = 4;
              return _database.Post.findById(id).exec();

            case 4:
              post = _context4.sent;

              if (post) {
                _context4.next = 9;
                break;
              }

              throw new _utilities.APIError(404, "Post with id: ".concat(id, " not found!"));

            case 9:
              vm = {
                post: post,
                categories: []
              };
              return _context4.abrupt("return", res.status(200).json(vm));

            case 11:
              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](1);
              (0, _utilities.handleAPIError)(_context4.t0.status || 500, _context4.t0.message || "Some error occurred while deleting the Post with id: ".concat(id, "!"), next);

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 13]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "update",
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(req, res, next) {
      var id, postUpdate, post;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.id;
              _context5.prev = 1;
              postUpdate = req.body;
              _context5.next = 5;
              return _database.Post.findOneAndUpdate({
                _id: id
              }, postUpdate, {
                new: true
              }).exec();

            case 5:
              post = _context5.sent;

              if (post) {
                _context5.next = 8;
                break;
              }

              throw new _utilities.APIError(404, "Post with id: ".concat(id, " not found!"));

            case 8:
              return _context5.abrupt("return", res.status(200).json(post));

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](1);
              (0, _utilities.handleAPIError)(_context5.t0.status || 500, _context5.t0.message || "Some error occurred while deleting the Post with id: ".concat(id, "!"), next);

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 11]]);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "destroy",
  /*#__PURE__*/
  function () {
    var _ref6 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(req, res, next) {
      var id, post;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = req.params.id;
              _context6.prev = 1;
              _context6.next = 4;
              return _database.Post.findOneAndRemove({
                _id: id
              });

            case 4:
              post = _context6.sent;

              if (post) {
                _context6.next = 9;
                break;
              }

              throw new _utilities.APIError(404, "Post with id: ".concat(id, " not found!"));

            case 9:
              res.status(200).json({
                message: "Successful deleted the Post with id: ".concat(id, "!")
              });

            case 10:
              _context6.next = 15;
              break;

            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](1);
              (0, _utilities.handleAPIError)(_context6.t0.status || 500, _context6.t0.message || "Some error occurred while deleting the Post with id: ".concat(id, "!"), next);

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 12]]);
    }));

    return function (_x16, _x17, _x18) {
      return _ref6.apply(this, arguments);
    };
  }());
};

var _default = PostController;
exports.default = _default;