import UserModel from "./src/api/authentication/register/UserModel";
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

const initialize = passport => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        UserModel.findOne({ email: email }).then(user => {
          if (!user) {
            return done(null, false, {
              message:
                "Hoops cant find a user with the provided email address please check."
            });
          }
          bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) {
              return done(null, false, {
                message: "Incorrect password please check and try again."
              });
            }
            if (isMatch) {
              return done(null, user, { message: "Login successful" });
            }
          });
        });
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err, user) => {
      done(err, user);
    });
  });

};

module.exports = initialize;
