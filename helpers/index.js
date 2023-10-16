const successResponse = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const errorResponse = (statusCode, message) => ({
  statusCode,
  body: JSON.stringify({ error: message }),
});

export { successResponse, errorResponse }