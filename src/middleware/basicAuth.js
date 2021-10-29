'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { users } = require('../models/user.js');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) {
    res.status(403).send('Joe, you ain\'t got no auth headers');
  }

  let basic = req.headers.authorization.split(' ').pop();
  let [user, pass] = base64.decode(basic).split(':');

  let encodedUserPass = request.headers.authorization.split(' ')[1]; // ABX787=a
  let decodedUserPass = base64.decode(encodedUserPass); // jacob:password
  let [username, password] = decodedUserPass.split(':');

  // find user by username
  let userQuery = await users.findOne({ where: { username } });
  // validate password
  let validPass = await bcrypt.compare(password, userQuery.password);
  if (validPass) {
    request.user = userQuery;
    // when do we need to call next??
    next();
  } else {
    response.status(403);
    response.send('Authentication Error');
  }

  // try {
  //   req.user = await users.authenticateBasic(user, pass);
  //   next();
  // } catch (e) {
  //   _authError()
  // }

  // function _authError() {
  //   res.status(403).send('Invalid Login');
  // }
};
