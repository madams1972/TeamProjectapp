const withAuth = (req, res, next) => {
<<<<<<< HEAD
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  
=======
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
>>>>>>> 89fabfd5f8e3b63335f95df74c0980a223b5e1e8
