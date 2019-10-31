const express = require('express');
const router = express.Router();
const passport = require("../config/passport")
const User = require("../models/users")

const checkAndReturnUser = (req, res) => {
        console.log(req.isAuthenticated())
        if(req.isAuthenticated()){
                User.findOne({where:{
                        username : req.user.username
                }}).then(user => user.getFavourites())
                .then(favourites => res.json({
                        success: true,
                        user: req.user,
                        listOfFaves: favourites.map(fave => fave.imdbID) 
                }))
        }
        else{
        res.json({
                success: false,
                user: undefined,
                listOfFaves: []
            });
        }
}

router.post('/', passport.authenticate('local'), (req,res) => {checkAndReturnUser(req, res)});

router.get('/', function(req, res, next) {
        res.render('index');
});                                 

router.get("/auth", (req,res) => {checkAndReturnUser(req, res)});
module.exports = router;