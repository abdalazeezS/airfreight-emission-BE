import winston, { transports, format } from "winston";
const logger = winston.createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      level: 'error',
      filename: 'error-logs.log',
    }),
    new transports.File({
      level: 'info',
      filename: 'info-logs.log',
    })
  ],
  format: format.combine(
    format.json(),
    format.timestamp(),
    format.prettyPrint(),
  )
});

export default logger;