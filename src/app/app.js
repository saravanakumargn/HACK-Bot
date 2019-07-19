import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Controllers (route handlers)
import * as APIController from './controllers/main-api';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: './app/config/.env.dev' });

// Create Express server
const app = express();
app.use(helmet());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// console.log(process.env.APP_ID);
// console.log(process.env.APP_KEY);
// const callf = async () => {
//   // console.log('callf');
//   return await fetchData('/Place', {
//     type: 'CyclePark',
//     lat: 51.504844,
//     lon: 0.049518,
//     radius: 1000,
//   });
//   // let bikeResponse = {};
//   // const placesArray = [];
//   // const placesCount = bikedata.places.length;
//   // for(let i=0;i<placesCount;i++) {
//   //   let places = {
//   //     id: bikedata.places[i].id,
//   //     commonName: bikedata.places[i].commonName,
//   //     distance: bikedata.places[i].distance,
//   //   };
//   //   placesArray.push(places);
//   //   // console.log();
//   // }
//   // bikeResponse = {
//   //   centrePoint: bikedata.centrePoint,
//   //   placesArray,
//   // };
//   // console.log(bikedata);
//   // console.log(bikedata.places);
// };
// callf();
// async callf() => {
//   const bikedata = await fetchData('/Place', {
//     type: 'CyclePark',
//     lat: 51.504844,
//     lon: 0.049518,
//     radius: 1000,
//   });
//   console.log(bikedata);
// }
// await callf();
// Express configuration
app.set('port', process.env.PORT || 3000);
// app.set("views", path.join(__dirname, "../views"));

app.get('/', (req, res) => res.send('Hello World!'));

// app.get('/', placeAPIController.getApi);
app.post('/data', APIController.getAPIData);

// app.post('/data', async (req, res) => {
//   console.log(JSON.stringify(req.headers));
//   console.log(JSON.stringify(req.body));
//   const type = req.headers['type'];
//   console.log(type);
//   console.log(req.body);

//   res.json(await callf());
// });

export default app;
