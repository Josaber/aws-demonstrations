const AWS = require('aws-sdk');
const QUEUE_URL = 'http://localhost:4576/queue/TestParamQueueName';

let sqs = new AWS.SQS({
    apiVersion: '2012-11-05',
    endpoint: 'http://localhost:4576',
    region: process.env.AWS_REGION
});

if (process.env.NODE_ENV === 'production') {
    sqs = new AWS.SQS({
        apiVersion: '2012-11-05',
        region: process.env.AWS_REGION
    });
}

function addPermission() {
    let params = {
        AWSAccountIds: [
            'Test Account Id'
        ],
        Actions: [
            'SendMessage',
            'DeleteMessage',
            'ReceiveMessage',
            'GetQueueUrl',
            'ChangeMessageVisibility'
        ],
        Label: 'MySendMessage',
        QueueUrl: QUEUE_URL
    };
    sqs.addPermission(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
    });
}

function sendMessage(message) {
    let params = {
        MessageBody: message,
        QueueUrl: QUEUE_URL,
        DelaySeconds: 10,
        MessageAttributes: {
            'uuid': {
                DataType: 'String',
                StringValue: 'This is string attribute'
            },
        }
    };

    console.log('send message: ' + message);
    sqs.sendMessage(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
    });
}

function changeMessageVisibility(receipt) {
    let params = {
        QueueUrl: QUEUE_URL,
        ReceiptHandle: receipt,
        VisibilityTimeout: 5
    };
    sqs.changeMessageVisibility(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data);
    });
}

function deleteMessage(receipt) {
    let params = {
        QueueUrl: QUEUE_URL,
        ReceiptHandle: receipt
    };

    console.log('delete message: ' + receipt);
    sqs.deleteMessage(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else
            console.log(data);
    });
}

function getMessage() {
    let params = {
        QueueUrl: QUEUE_URL,
        MaxNumberOfMessages: 1,
        VisibilityTimeout: 0,
        WaitTimeSeconds: 0
    };

    sqs.receiveMessage(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else {
            console.log('Deal with the message.');
            console.log(data);
            if (data.Messages && data.Messages.length > 0) {
                console.log('get message' + data.Messages[0].Body);
                deleteMessage(data.Messages[0].ReceiptHandle);
            }
            else
                console.log('There is no message.')
        }
    });
}

module.exports = {sendMessage, getMessage};