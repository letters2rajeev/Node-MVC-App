const userModel = require('../models/userModel');

exports.getUsers = async (req,res)=>{
    try{
        const users = await userModel.getAllUsers();
        res.render('users', {users});
    } catch(err){
        res.send('server error!')
    }
}