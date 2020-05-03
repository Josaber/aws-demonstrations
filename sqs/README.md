# AWS SQS Example

* **Date:** 2018-06-13
* **Author:** https://github.com/Josaber 

# Prerequisites

* Docker
* Node
* Yarn
* Bash/Zsh

# Project Overview

* Setup localstack: 
  `auto/run-local-stack`

* Create SQS Stack: 
  `deployment/create-sqs-stack`

* List Queue: 
  `auto/list-sqs-queues`
  
* Run: 
  `auto/run-app-local`
  
* Stop localstack: 
  `auto/shut-down/local-stack`
  
### Online (Real AWS)

* Change the QUEUE_URL in the [code](./src/sqs_wrapper.js)
* Run script `auto/run-app-online`

**Note:** 
You can use more powerful CloudFormation templates in `deployment/templates`. Localstack doesn's support that for now.

# [Localstack](https://github.com/localstack/localstack/) Overview

## Endpoints

*LocalStack* spins up the following core Cloud APIs on your local machine:

* **API Gateway** at http://localhost:4567
* **Kinesis** at http://localhost:4568
* **DynamoDB** at http://localhost:4569
* **DynamoDB Streams** at http://localhost:4570
* **Elasticsearch** at http://localhost:4571
* **S3** at http://localhost:4572
* **Firehose** at http://localhost:4573
* **Lambda** at http://localhost:4574
* **SNS** at http://localhost:4575
* **SQS** at http://localhost:4576
* **Redshift** at http://localhost:4577
* **ES (Elasticsearch Service)** at http://localhost:4578
* **SES** at http://localhost:4579
* **Route53** at http://localhost:4580
* **CloudFormation** at http://localhost:4581
* **CloudWatch** at http://localhost:4582
* **SSM** at http://localhost:4583

## Configurations

You can pass the following environment variables to LocalStack:

* `SERVICES`: Comma-separated list of service names and (optional) ports they should run on.
  If no port is specified, a default port is used. Service names basically correspond to the
  [service names of the AWS CLI](http://docs.aws.amazon.com/cli/latest/reference/#available-services)
  (`kinesis`, `lambda`, `sqs`, etc), although LocalStack only supports a subset of them.
  Example value: `kinesis,lambda:4569,sqs:4570` to start Kinesis on the default port,
  Lambda on port 4569, and SQS on port 4570.
* `DEFAULT_REGION`: AWS region to use when talking to the API (defaults to `us-east-1`).
* `HOSTNAME`: Name of the host to expose the services internally (defaults to `localhost`).
  Use this to customize the framework-internal communication, e.g., if services are
  started in different containers using docker-compose.
* `USE_SSL`: Whether to use `https://...` URLs with SSL encryption (defaults to `false`).
