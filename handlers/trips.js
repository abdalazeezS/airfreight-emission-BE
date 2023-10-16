import moment from "moment/moment.js";
import { trips } from "../data.js";
import { successResponse } from "../helpers/index.js";
import logger from "../logger.js";

const getTrips = (event, context, callback) => {
  logger.info('get trips endpoint');
  const queryParams = event.multiValueQueryStringParameters || {};
  const filteredTrips = filterTrips(trips, queryParams);
  callback(null, successResponse(200, filteredTrips))
}

const filterTrips = (trips, queryParams) => {
  const origin = queryParams.origin?.at(0);
  const destination = queryParams.destination?.at(0);
  const airline = queryParams.airline?.at(0);
  const startDate = moment(queryParams.startDate?.at(0), 'YYYY-MM-DD');
  const endDate = moment(queryParams.endDate?.at(0), 'YYYY-MM-DD');
  const page = queryParams.p?.at(0) || 1;
  const q = queryParams.q;

  return trips.filter((trip, index) => {
    const tripDate = moment(trip.date, 'YYYY-MM-DD');
    return (
      (index >= (page - 1) * 10 && index < page * 10) &&
      (!origin || trip.origin === origin) &&
      (!destination || trip.destination === destination) &&
      (!airline || trip.airline === airline) &&
      (!q || q?.includes(trip.emission_level_category)) &&
      (!queryParams.startDate?.at(0) || !queryParams.endDate?.at(0) || tripDate.isBetween(startDate, endDate, 'days', '[]'))
    );
  });
};

export default { getTrips }