import { fetchData } from '../api/request-helper';

const callData = async (endPoint, params) => {
  // const placeData = await fetchData('/Place', {
  //   type: 'CyclePark',
  //   lat: 51.504844,
  //   lon: 0.049518,
  //   radius: 1000,
  // });
  const placeData = await fetchData(endPoint, params);
  return placeData;
};

/**
 * GET /api
 * List of API examples.
 */
// eslint-disable-next-line
export const getAPIData = async (req, res) => {
  // console.log(JSON.stringify(req.headers));
  // console.log(JSON.stringify(req.body));
  // const type = req.headers['type'];
  // console.log(type);
  // console.log(req.body);

  res.json(await callData(req.body.point, req.body.data));
};
