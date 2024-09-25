const User = require('../models/loginSchema');
const bcrypt = require('bcrypt');
const generateUserId = require('../utils/generateUserIds');

//register
exports.registerUser = async (req, res) =>{
    try{
        const {name, userName, password} = req.body;
        const uniqueId = generateUserId();

        const existingUser = await User.findOne({userName});
        if(existingUser){
            return res.status(400).json('This username already exist');
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);

        const newUser = new User({uniqueId, name, userName, password:hashedPassword});
        await newUser.save();

        res.status(200).json({message:'Registration successful'});
    } catch(error) {
        console.error('Error in user registration: ', error);
        res.status(500).json({message:'Internal Server Error', error});
    }
};

//login function
exports.loginUser = async (req,res) =>{
    try{
        const {userName,password} = req.body;
        const user = await User.findOne({userName});
        if(!user){
            return res.status(404).json({message:'Invalid username or password'});
        }
        const userpassword = await bcrypt.compare(password, user.password);
        if(!userpassword){
            return res.status(404).json({message:'Invalid username or password'});
        }

        req.session.user ={
            id:user._id,
            name: user.name
        }
        res.status(200).json({message:'Login successful', user:req.session.user});

    } catch(error) {
        console.error('login error: ', error);
        res.status(500).json({message:'Internal server error', error});
    }
};

//logout function
exports.logoutUser = (req, res) => {
    req.session.destroy((err)=>{
        if(err) {
            return res.status(500).json({message: 'Unable to logout'});
        }
        res.json({ message: 'Logout successful' });
    });
};