'use strict';

function handle403(req, res, next) {

  const errorObject = {
    status: 403,
    message: 'Unauthorized action ya jack wagon'
  };
  res.status(403).json(errorObject);
}

module.exports = handle403;
