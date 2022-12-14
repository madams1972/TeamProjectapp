const router = require('express').Router();
const { User }= require('../../models')

router.get('/', async(req,res)=>{
    try{
        const dbUserData = await User.findAll({
        include: [
            {
                model: User,
                attritubes:['username']
            }
        ]
        })
    }
    catch(err){
        console.log(err)
    }
})
