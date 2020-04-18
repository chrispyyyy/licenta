const vm = require("v-response");
const passport = require("passport");

exports.login = (req, res, next) => {
  passport.authenticate("local", function(error, user, info) {
    if (error) {
      return res.status(400).json(vm.ApiResponse(false, 400, info.message));
    }
    if (user) {
      req.login(user, function(err) {
        if (err) {
          return res.status(400).json(vm.ApiResponse(false, 400, info.message));
        }
        return res.status(200).json(
          vm.ApiResponse(true, 200, info.message, {
            user: {
              id: user._id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              role: user.role
            }
          })
        );
      });
    } else {
      return res.status(401).json(vm.ApiResponse(false, 401, info.message));
    }
  })(req, res, next);
};
