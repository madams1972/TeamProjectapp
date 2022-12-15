const router = require("express").Router();
const User = require("../../models/user");

// router.post('/login', async(req, res)=>{
//     try {
//         // console.log(User)
//         const userData= await User.findOne({where:{id:req.body.username} });
//         console.log(userData)
//     if (!userData){
//         res
router.post("/newuser", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { id: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect name or password, please try again" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.checkPassword);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect name or password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: userData, message: "You're in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
