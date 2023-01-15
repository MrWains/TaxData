const successObj = (message, data) => {
  const obj = {
    success: true,
    data: data,
    message: message,
  };

  return obj;
};
const errorObj = (message) => {
  const obj = {
    success: false,
    message: message,
  };
  return obj;
};

module.exports = {
  successObj,
  errorObj,
};
