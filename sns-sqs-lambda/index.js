const process = require('./src/processor')

exports.handler = event => {
  const snsMessageBody = JSON.parse(event.Records[ 0 ].body)
  const message = snsMessageBody.Message
  return process(message)
}
