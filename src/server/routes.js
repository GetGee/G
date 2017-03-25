'use strict';

import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';
import AuthApi from './apis/auth';

export default function routes(app, db) {
  const auth = new AuthApi(db);

  app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true,
  })));

  // app.route('/api/signup')
  //   .post(bodyParser.json(), auth.signup, users.createRecord);

  // app.route('/api/login')
  //   .post(bodyParser.json(), auth.login);

  app.get('*', (req, res) => {
    res.sendFile(`${process.cwd()}/build/index.html`);
  });
}
