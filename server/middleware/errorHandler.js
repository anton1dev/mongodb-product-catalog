import httpStatus from 'http-status';

export const errorHandler = (err, res) => {
  console.error(err.stack);
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).json({
    message: err.message || 'Internal Server Error'
  });
};
