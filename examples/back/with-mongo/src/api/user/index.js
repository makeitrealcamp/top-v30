const router = require('express').Router();
const {
  userCreateController,
  listUsersController
} = require('./user.controller');


router.route('/').post(userCreateController);
router.route('/').get(listUsersController);


module.exports = router;