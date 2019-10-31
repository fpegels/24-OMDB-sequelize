const express = require('express');
const router = express.Router();
const registerRouter = require('./register');
const loginRouter = require('./login')
const favouritesRouter = require('./favourites')
const usersRouter = require('./users')

router.get('/logout', function(req, res){
  req.logout();
  res.json({})
});

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/favourites', favouritesRouter)
router.use('/users', usersRouter)


module.exports = router;
