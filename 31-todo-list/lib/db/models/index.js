"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var basename = _path["default"].basename(__filename);

var env = process.env.NODE_ENV || 'development';

var config = require(__dirname + '/../../../config/config.json')[env];

var models = {};
var sequelize;

if (config.use_env_variable) {
  sequelize = new _sequelize["default"](process.env[config.use_env_variable], config);
} else {
  sequelize = new _sequelize["default"](config.database, config.username, config.password, config);
}

_fs["default"].readdirSync(__dirname).filter(function (file) {
  // index.js 파일 필터링
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  // index.js를 제외한 파일  가져오기
  var model = require(_path["default"].join(__dirname, file))(sequelize, _sequelize["default"].DataTypes);

  models[model.name] = model;
});

Object.keys(models).forEach(function (modelName) {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});
models.sequelize = sequelize;
models.Sequelize = _sequelize["default"];
var _default = models;
exports["default"] = _default;