'use strict';

const validator = (req, res, next) => {
  const token = req.token;

  next();
  // todo: fix validator
/*
  if (token) {
    next();
  } else {
    next('Invalid Request');
  }
*/
};

module.exports = validator;
