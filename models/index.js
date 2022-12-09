const User = require('./user');
const Answers = require('./answer')
const Quizes = require('./quiz')
const Questions = require('./question')

User.hasMany(Quizes, {
    foreignKey:"user_id"
});
 Quizes.belongsTo(User,{
    foreignKey:"user_id"
 });
 User.hasMany(Questions, {
    foreignKey:"user_id"
})
Questions.belongsTo(User,{
    foreignKey:"user_id"
})
User.hasMany(Answers, {
    foreignKey:"user_id"
});
Answers.belongsTo(User,{
    foreignKey:"user_id"
})


module.exports = { User,Answers,Quizes,Questions};