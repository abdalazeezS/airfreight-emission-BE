import { trips, origins, destinations, airlines } from './data.js';
import moment from 'moment';

const getTrips = (event, context, callback) => {
  const queryParams = event.queryStringParameters || {};
  console.log(queryParams);
  const origin = queryParams.origin;
  const destination = queryParams.destination;
  const airline = queryParams.airline;
  const startDate = moment(queryParams.startDate, 'YYYY-MM-DD');
  const endDate = moment(queryParams.endDate, 'YYYY-MM-DD');

  const filteredTrips = trips.filter(trip => {
    const tripDate = moment(trip.date, 'YYYY-MM-DD');
    console.log(tripDate);
    console.log("hi", tripDate.isBetween(startDate, endDate, 'days', '[]'));
    return (
      (!origin || trip.origin === origin) &&
      (!destination || trip.destination === destination) &&
      (!airline || trip.airline === airline) &&
      (!queryParams.startDate || !queryParams.endDate || tripDate.isBetween(startDate, endDate, 'days', '[]'))
    );

  });
  console.log(filteredTrips);
  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filteredTrips),
  })
}

const getOrigins = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(origins)
  })
}

const getDestinations = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(destinations)
  })
}

const getAirlines = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(airlines)
  })
}
export { getTrips, getOrigins, getDestinations, getAirlines };