const router = require('express').Router();
const {
  userCreateController,
} = require('./user.controller');


router.route('/').post(userCreateController);


module.exports = router;