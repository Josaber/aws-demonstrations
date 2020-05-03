const {sendMessage, getMessage} = require('./src/sqs_wrapper');
const uuidv4 = require('uuid/v4');

sendMessage(uuidv4());
getMessage();
