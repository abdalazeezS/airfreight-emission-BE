import { destinations } from "../data.js"
import { successResponse } from "../helpers/index.js"

const getDestinations = (event, context, callback) => {
  callback(null, successResponse(200, destinations))
}

export default { getDestinations }