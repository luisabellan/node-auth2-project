"use strict";

var express = require("express");

var Users = require("./users-model");

var restrict = require("../middleware/restrict");

var router = express.Router(); // This endpoint is only available to logged-in admin users due to the `restrict` middleware

<<<<<<< HEAD
router.get("/", restrict("admin"), function _callee(req, res, next) {
=======
router.get("/", function _callee(req, res, next) {
  var authError;
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
<<<<<<< HEAD
          _context.prev = 0;
          _context.t0 = res.status(200);
          _context.next = 4;
          return regeneratorRuntime.awrap(Users.find());

        case 4:
=======
          authError = {
            message: "You shall not pass!",
            "if": function _if(user) {
              return res.status(409).json({
                message: authError
              });
            }
          };
          _context.prev = 1;
          _context.t0 = res;
          _context.next = 5;
          return regeneratorRuntime.awrap(Users.find());

        case 5:
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
          _context.t1 = _context.sent;

          _context.t0.json.call(_context.t0, _context.t1);

<<<<<<< HEAD
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t2 = _context["catch"](0);
          next(_context.t2);

        case 11:
=======
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t2 = _context["catch"](1);
          next(_context.t2);

        case 12:
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
        case "end":
          return _context.stop();
      }
    }
<<<<<<< HEAD
  }, null, null, [[0, 8]]);
=======
  }, null, null, [[1, 9]]);
}); // This endpoint is only available to logged-in admin users due to the `restrict` middleware

router.get("/:id", function _callee2(req, res, next) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.t0 = res;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Users.findById(req.params.id));

        case 4:
          _context2.t1 = _context2.sent;

          _context2.t0.json.call(_context2.t0, _context2.t1);

          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t2 = _context2["catch"](0);
          next(_context2.t2);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //logout

router.get("/logout", function (req, res, next) {
  // this will delete the session in the database and try to expire the cookie,
  // though it's ultimately up to the client if they delete the cookie or not.
  // but it becomes useless to them once the session is deleted server-side.
  req.session.destroy(function (err) {
    if (err) {
      next(err);
    } else {
      res.json({
        message: "Successfully logged out"
      });
    }
  });
}); // This handles the route `PUT /users/:id`

router.put("/:id", function (req, res) {
  Users.update(req.params.id, req.body).then(function (user) {
    res.status(200).json(user);
  })["catch"](function (error) {
    next(error);
  });
}); // This handles the route `DELETE /users/:id`

router["delete"]("/:id", function (req, res) {
  Users.deleteUser(req.params.id).then(function (count) {
    res.status(200).json({
      message: "The user has been nuked"
    });
  })["catch"](function (error) {
    next(error);
  });
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
});
module.exports = router;