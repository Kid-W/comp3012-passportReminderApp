const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GitHubStrategy = require('passport-github').Strategy
const userController = require("../controllers/userController");

const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    const user = userController.getUserByEmailIdAndPassword(email, password);
    return user
      ? done(null, user)
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);

const githubLogin = new GitHubStrategy(

  {
    clientID: "ea40fbeb853d905763f0",
    clientSecret: "108b19ccee80fe7189815ee116f2ea750b74d183" ,
    callbackURL: 'http://localhost:8000/auth/github/callback',
  },
  function(accessToken, refreshToken, profile, done){

    let user = userController.getUserByGitHubIdOrCreate(profile)
    console.log(profile, 'prfile object')
    return done(null, user)
  }
)

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  let user = userController.getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

module.exports = passport.use(githubLogin).use(localLogin);
