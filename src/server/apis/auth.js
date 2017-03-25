'use strict';

import fetch from 'isomorphic-fetch';

export default function AuthApi() {
  const clientId = process.env.AUTH0_CLIENT_ID || '';
  const apiUrl = process.env.AUTH0_API_URL || '';

  this.signup = function(req, res, next) {
    fetch(apiUrl + 'dbconnections/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        email: req.body.args.email,
        password: req.body.args.password,
        connection: 'Username-Password-Authentication',
      }),
    }).then(rawResponse => {
      req.newUser = rawResponse.json();
      next();
    });
  };

  this.login = (req, res, next) => {
    fetch(apiUrl + 'oauth/ro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        username: req.body.args.email,
        password: req.body.args.password,
        scope: 'openid profile',
        connection: 'Username-Password-Authentication',
      }),
    }).then(rawResponse => rawResponse.json())
    .then((formattedResponse) => {
      if (formattedResponse.access_token) {
        req.token = formattedResponse.id_token;
      } else if (formattedResponse.error_description) {
        req.loginError = formattedResponse.error_description;
      } else {
        req.loginError = formattedResponse;
      }
      next();
    });
  };
}
