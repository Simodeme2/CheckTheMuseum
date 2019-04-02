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

var _faker = _interopRequireDefault(require("faker"));

var _schemas = require("./schemas");

/*
Import the external libraries:
- faker
*/

/*
Import the internal libraries:
- Post
*/
var Seeder = function Seeder() {
  var _this = this;

  (0, _classCallCheck2.default)(this, Seeder);
  (0, _defineProperty2.default)(this, "postCreate",
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(title, synopsis, body) {
      var postDetail, post, newPost;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              postDetail = {
                title: title,
                synopsis: synopsis,
                body: body
              };
              post = new _schemas.Post(postDetail);
              _context.prev = 2;
              _context.next = 5;
              return post.save();

            case 5:
              newPost = _context.sent;

              _this.posts.push(newPost);

              console.log("Post create with id: ".concat(newPost.id, "!"));
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              console.log("Post create with id: ".concat(_context.t0, "!"));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "createPosts",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee9() {
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee2() {
              return _regenerator.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee3() {
              return _regenerator.default.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee4() {
              return _regenerator.default.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee5() {
              return _regenerator.default.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee6() {
              return _regenerator.default.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee7() {
              return _regenerator.default.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee8() {
              return _regenerator.default.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }))()]);

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  (0, _defineProperty2.default)(this, "seed",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee11() {
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _schemas.Post.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref11 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee10(count) {
                return _regenerator.default.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context10.next = 3;
                          break;
                        }

                        _context10.next = 3;
                        return _this.createPosts();

                      case 3:
                        return _context10.abrupt("return", _schemas.Post.find().exec());

                      case 4:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));

              return function (_x4) {
                return _ref11.apply(this, arguments);
              };
            }());

          case 2:
            _this.posts = _context11.sent;

          case 3:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
  this.posts = [];
};

var _default = Seeder;
exports.default = _default;