const express = require('express');
const router = express.Router();
const User = require("../models/users")

router.post('/', function(req, res, next) {
  return User.create(req.body)
  .then((user)=>{
    req.logIn(user, function(err) {
      if (err) { return console.log(err); }
      return console.log("Logged in");
    })}
    )
  .then(()=> 
    res.json({
    success: req.isAuthenticated(),
    user: req.user,
}))
  .catch(err => res.json({
    success: req.isAuthenticated(),
    user: {favorites: []}
  }));
});

module.exports = router;