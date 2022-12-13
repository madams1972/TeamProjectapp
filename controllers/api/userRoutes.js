const router = require("express").Router()
const {User} = require("../../models")

router.post('/login', async(req, res)=>{
    try {
        const userData= await User.findOne({where:{id:req.body.username} });

    if (!userData){
        res
        .status(400)
        .json({message: "Incorrect name or password, please try again"});
        return;
    }
const validPassword = await userData.checkPassword(req.body.checkPassword)

if (!validPassword) {
    res
    .status(400)
    .json({message: "Incorrect name or password, please try again"});
    return;
}
 req.session.save(()=>{
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    res.json({user: userData,message:"You're in!"})
 })
}
 catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;