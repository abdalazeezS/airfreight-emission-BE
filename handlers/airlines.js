import { airlines } from "../data.js"
import { successResponse } from "../helpers/index.js"

const getAirlines = (event, context, callback) => {
  callback(null, successResponse(200, airlines))
}
export default { getAirlines }