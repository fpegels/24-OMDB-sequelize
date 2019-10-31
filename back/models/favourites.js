const db = require("../config/db");
const S = require("sequelize");

class Favourite extends S.Model {

}
Favourite.init({
    imdbID: {
        type: S.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    Poster: {
        type: S.STRING,
        allowNull: false,
    }
}, {sequelize : db, modelName: "favourite"});


module.exports = Favourite;
