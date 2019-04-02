"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _slug = _interopRequireDefault(require("slug"));

var Schema = _mongoose.default.Schema;
var PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: 128
  },
  synopsis: {
    type: String,
    required: true,
    max: 512
  },
  body: {
    type: String,
    required: false
  },
  published_at: {
    type: Date,
    required: false
  },
  deleted_at: {
    type: Date,
    required: false
  }
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
PostSchema.virtual('id').get(function () {
  return this._id;
});
PostSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slug = (0, _slug.default)(this.title);
  }

  return next();
});

var _default = _mongoose.default.model('Post', PostSchema);

exports.default = _default;