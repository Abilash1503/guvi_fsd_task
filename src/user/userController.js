var userService = require('./userServices');

var registereuserController = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await userService.registereuserDBService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "user created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var loginUserController = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

module.exports = { registereuserController,loginUserController };