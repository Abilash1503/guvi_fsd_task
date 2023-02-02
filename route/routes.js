var express = require('express');

var userController = require('../src/user/userController');
const router = express.Router();

router.route('/user/login').post(userController.loginUserController);
router.route('/user/create').post(userController.registereuserController);


module.exports = router;