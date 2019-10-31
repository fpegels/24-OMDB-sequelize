const db = require("../config/db");
const S = require("sequelize");
const crypto = require('crypto');
const Favourite = require('./favourites')

class User extends S.Model {

}
User.init({
    username: {
        type: S.STRING,
        allowNull: false,
        unique: true,
        validate:{
            notEmpty: true
        }
    },
    salt: {
        type: S.STRING,
        get(){ return () => this.getDateValue("salt")}
    },
    password: {
        type: S.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        },
        get(){ return () => this.getDateValue("password")}
    },
}, {sequelize : db, modelName: "user"});

User.randomSaltGenerator = function(){
    return crypto.randomBytes(20).toString('hex')
}

User.passwordHasher = function(salt, password){
    return crypto.createHmac('sha1', salt).update(password).digest('hex')
}

User.prototype.validPassword = function(password){
    return this.getDataValue("password") === User.passwordHasher(this.getDataValue("salt"), password)
}

User.beforeCreate((user) => {
    user.salt = User.randomSaltGenerator()
    user.password = User.passwordHasher(user.getDataValue("salt").toString(), user.getDataValue("password"))})

User.belongsToMany(Favourite, {through: 'User_Favourite'});
module.exports = User;
