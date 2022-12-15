const  User  = require("../models/user");

const userData = [
    {
        "username":"hello@gmail.com",
        "password":"Bunnyrabbit123"
    }
];

const seedUser = () => User.bulkCreate(userData, {
        individualHooks: true,
    returning: true,
  });


module.exports = seedUser;
