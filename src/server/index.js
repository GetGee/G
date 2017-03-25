import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose.connect('mongodb://getgeedev:development@ds121190.mlab.com:21190/heroku_0881rf5t');
const db = mongoose.connection;

app.use('/static', express.static(`${process.cwd()}/build/static`));

routes(app, db);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Express server listening on port ${process.env.PORT || 3000}`);
});
