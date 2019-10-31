const express = require('express');
const router = express.Router();
const User = require("../models/users")
const S = require("sequelize");
const Favourite = require("../models/favourites")

router.post('/add/', function(req, res){
    Promise.all([User.findOne({where: {
        username : req.user.username
    }}), 
    Favourite.findOne({where: {
        imdbID : req.body.imdbID
    }})
]).then(async (data) => {if(data[1]){
                    await data[0].addFavourite(data[1]).then(() => true)
                }else{
                   await data[0].createFavourite({imdbID:req.body.imdbID, Poster: req.body.poster}).then(() => true)
                }
                data[0].getFavourites().then(favourites => res.json(favourites))
})

})


router.delete('/delete/:imdbID', function(req, res){
    User.findOne({
        where:{username: req.user.username}
    })
    .then(async(user) => { 
                    await user.removeFavourite(req.params.imdbID).then(() => true)
                    user.getFavourites().then(favourites => res.json(favourites.map(fave => fave.imdbID)))
    })
});

router.get("/", function(req, res){
    User.findOne({
        where:{username:req.user.username}
    }).then(user => user.getFavourites().then(favourites => res.json(favourites)))
})

router.get("/:username", function(req, res){
    User.findOne({
        where:{username:req.params.username}
    }).then(user => user.getFavourites().then(favourites => res.json(favourites)))
})

//favorites: S.fn('array_append', S.col('favorites'), req.params.imdbID)
                                                  
module.exports = router;