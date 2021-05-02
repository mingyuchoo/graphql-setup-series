"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var resolvers = {
  Query: {
    user: function user(parent, _ref, _ref2) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, models;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                models = _ref2.models;
                return _context.abrupt("return", models.User.findByPk(id));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    allUsers: function allUsers(parent, args, _ref3) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var models;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                models = _ref3.models;
                return _context2.abrupt("return", models.User.findAll());

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    allRecipes: function allRecipes(parent, args, _ref4) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var models;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                models = _ref4.models;
                return _context3.abrupt("return", models.Recipe.findAll());

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    recipe: function recipe(parent, _ref5, _ref6) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var id, models;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = _ref5.id;
                models = _ref6.models;
                return _context4.abrupt("return", models.Recipe.findByPk(id));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  Mutation: {
    createUser: function createUser(parent, _ref7, _ref8) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var name, email, password, models;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                name = _ref7.name, email = _ref7.email, password = _ref7.password;
                models = _ref8.models;
                _context5.t0 = models.User;
                _context5.t1 = name;
                _context5.t2 = email;
                _context5.next = 7;
                return _bcryptjs["default"].hash(password, 10);

              case 7:
                _context5.t3 = _context5.sent;
                _context5.t4 = {
                  name: _context5.t1,
                  email: _context5.t2,
                  password: _context5.t3
                };
                return _context5.abrupt("return", _context5.t0.create.call(_context5.t0, _context5.t4));

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    createRecipe: function createRecipe(parent, _ref9, _ref10) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var userId, title, ingredients, direction, models;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userId = _ref9.userId, title = _ref9.title, ingredients = _ref9.ingredients, direction = _ref9.direction;
                models = _ref10.models;
                return _context6.abrupt("return", models.Recipe.create({
                  userId: userId,
                  title: title,
                  ingredients: ingredients,
                  direction: direction
                }));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  },
  User: {
    recipes: function recipes(user) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", user.getRecipes());

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  },
  Recipe: {
    user: function user(recipe) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", recipe.getUser());

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    }
  }
};
var _default = resolvers;
exports["default"] = _default;