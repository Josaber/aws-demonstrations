exports.handler = async (event, context) => {
  console.log(event);
  return context.logStreamName;
};
