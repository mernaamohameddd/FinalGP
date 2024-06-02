const AuthService = require ('../services/auth');

module.exports.postUser = async (req,res) => {
    try{
        const userInfo = {
            Username : req.body.Username,
            Password : req.body.Password,
            Name: req.body.Name,
            Role:req.body.Role,
            Email: req.body.Email
        };

        const userExists = await AuthService.doesUserExist(userInfo.Username);
        if (userExists){
            return res.status(422).send({
                error: 'A user with the same username aleardy exists.'
            });
        }
       const u = await AuthService.createUser(userInfo);
       return u;
    } catch (error){
        res.status(500).send({
            error: error.message
        });
    }
};

module.exports.postLogin = async (req, res) => {
    const { Username, Password, Role } = req.body;
    try {
        console.log('Received login request:', { Username, Password, Role });
  
        var acc = null;
        if (Role.toLowerCase() === "teacher") {
            acc = await AuthService.chkAdminCreds(Username, Password);
        } else if (Role.toLowerCase() === "student") {
            acc = await AuthService.chkUserCreds(Username, Password);
        }
  
        if (acc === null) {
            console.log('Login failed for user:', Username);
            return res.status(401).send({
                error: 'Invalid credentials, please enter the correct username and password.'
            });
        }
        const jwtToken = AuthService.generateJWT(acc, acc.Role);
  
        console.log('Login success for user:', Username);
        return res.send({
            userId: acc._id,
            Username: acc.Username,
            Role: acc.Role,
            token: jwtToken,
            message: 'Logged in successfully.'
        });
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).send({
            error: err.message
        });
    }
  };
  

module.exports.getStudentsUsernames = async (req, res) => {
    try {
      const usernames = await AuthService.getStudentsUsernames();
      res.send(usernames);
    } catch (error) {
      console.error('Error getting students usernames:', error);
      res.status(500).send({
        error: 'Error getting students usernames, please try again later.'
      });
    }
  };