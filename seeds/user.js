const  User  = require("../models/user");

const userData = [
    {
        "username":"hello@gmail.com",
        "password":"Bunnyrabbit123"
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
