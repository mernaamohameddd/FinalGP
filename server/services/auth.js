
const { ObjectId } = require('mongoose').Types;
const UserModel = require('../models/Accounts');
const JWT = require('jsonwebtoken');

module.exports.createUser = async (userInfo) => {
    try {
        //let hashedPassword = await bcrypt.hash(userInfo.Password, 12);

        const newUser = new UserModel({
            Username: userInfo.Username,
            Password: userInfo.Password,
            Name: userInfo.Name,
            Role: userInfo.Role,
            Email: userInfo.Email
        });
        await newUser.save();
    }catch(err) {
        console.error(err);
        throw new Error ('Error creating new user, please try again later.');
    }
    
};

module.exports.doesUserExist = async (username) => {
    const existingUser = await UserModel.findOne({
        Username: username
    });

    if (existingUser){
        return true;
    } else {
        return false;
    }
};

module.exports.chkUserCreds = async (username, password) => {
    try {
        const user = await UserModel.findOne({
            Username: username
        });

        if (!user) {
            console.log('User not found Server');
            return null;
        }

        //let isCorrectPassword = ; // Compare passwords as plain text

        if (password === user.Password) {
            return user;
        } else {
            console.log('Incorrect password');
            return null;
        }
    } catch (error) {
        throw new Error('Error logging in, please try again later.');
    }
};

module.exports.chkAdminCreds = async (username, password) => {
    try {
        const user = await UserModel.findOne({
            Username: username
        });

        if (!user) {
            console.log('User not found');
            return null;
        }

        let isCorrectPassword = password === user.Password; // Compare passwords as plain text

        if (isCorrectPassword) {
            return user;
        } else {
            console.log('Incorrect password');
            return null;
        }
    } catch (error) {
        throw new Error('Error logging in, please try again later.');
    }
};


module.exports.generateJWT = (user, role) => {
    const jwtPayload = {
            userId: user._id,
            Username: user.Username,
            Role:role,
        };

        const jwtSecret = process.env.JWT_SECRET;

    try {
        let token = JWT.sign(jwtPayload, jwtSecret, { expiresIn: '1h' });
        return token;
    } catch (error) {
        throw new Error('Failure to sign in, please try again later.');
    }
  };
  
  module.exports.getStudentsUsernames = async () => {
    try {
      // Query the database for users with role "student"
      const students = await UserModel.find({ Role: 'student' }, 'Username');
      return students.map(student => student.Username);
    } catch (error) {
      console.error('Error retrieving students usernames:', error);
      throw new Error('Error retrieving students usernames, please try again later.');
    }
  };