import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from './config/env';
import app from './config/express';

// promisify mongoose
Promise.promisifyAll(mongoose);


// connect to mongo db
mongoose.connect(config.db, {
  useMongoClient: true
}, () => {
  if (config.env === 'test') {
    mongoose.connection.db.dropDatabase();
  }
});
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

const debug = require('debug')('Trackko:index');


// listen on port config.port
app.listen(config.port, () => {
  const msg = `server started on port ${config.port} (${config.env})`;
  console.log(msg);
  debug(msg);
});

export default app;
