const jwt = require("jsonwebtoken");
const User = require('../models/user')


module.exports = {
  create,
  // login,
}

// async function login(req,res){
//   try{
//     const user = await User.findOne({email: req.body.email})
//     if (!user) throw new Error('email not found');
//     const match  = await compare(req.body.password, user.password)
//     if(!match) throw new Error();
//   }
// }

async function create(req, rres){
  try{
    const user = await User.create(req.body)
    const token = createJTW(user);
    res.json(token)
  }catch (err){
    res.status(400).json(err)
  }
}