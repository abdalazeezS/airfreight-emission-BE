import tripsHandler from './handlers/trips.js';
import originsHandler from './handlers/origins.js'
import destinationsHandler from './handlers/destinations.js';
import airlineHandler from './handlers/airlines.js';

export const getTrips = tripsHandler.getTrips;
export const getOrigins = originsHandler.getOrigins;
export const getAirlines = airlineHandler.getAirlines;
export const getDestinations = destinationsHandler.getDestinations;