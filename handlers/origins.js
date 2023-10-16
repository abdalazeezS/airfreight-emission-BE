import { origins } from "../data.js"
import { successResponse } from "../helpers/index.js"

const getOrigins = (event, context, callback) => {
  callback(null, successResponse(200, origins))
}

export default { getOrigins }
