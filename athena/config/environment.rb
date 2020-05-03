AWS_REGION = ENV['AWS_REGION'] || 'ap-southeast-2'
RUNTIME_ENV = ENV['ENV'] || 'development'

case RUNTIME_ENV
when 'development', 'test'
  ACCOUNT_ID = '<account-id>'.freeze
when 'prod'
  ACCOUNT_ID = '<account-id>'.freeze
else
  raise 'No such environment.'
end

OUTPUT_LOCATION =
  "s3://aws-athena-query-results-#{ACCOUNT_ID}-#{AWS_REGION}/<path-to-your-location-to-store-your-result>/".freeze
