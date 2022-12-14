const session = require("express-session");

// const sessionData = require(session);

module.exports ={
//auth helper function
withAuth : (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  },
}


