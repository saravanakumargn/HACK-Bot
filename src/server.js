// import { fetchData } from './app/api/request-helper';

const restify = require('restify');
const mongoose = require('mongoose');
const apiHelper = require('./app/api/request-helper');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0',
});

/**
 * Connect to MongoDB.
 */
const MONGODB_URI = 'mongodb://localhost:27017/testhack';
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/echo/:name', async (req, res, next) => {
  const placeData = await apiHelper.fetchData();
  console.log(placeData.results.value);
  // res.send(placeData);
  res.send(placeData);
  return next();
});

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
