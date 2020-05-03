# frozen_string_literal: true

require 'aws-sdk-athena'
Dir[File.dirname(__FILE__) + '/config/*.rb'].each { |file| require_relative file }
Dir[File.dirname(__FILE__) + '/utils/*.rb'].each { |file| require_relative file }

RESULT_FILE = './result/result.csv'.freeze

query_string =
  "SELECT metadata.device, metadata.agent
    FROM #{TABLE_NAME}
    WHERE datetime >= '#{START_DATE}T00:00:00Z'
      AND datetime < '#{END_DATE}T00:00:00Z'
    GROUP BY metadata.device
    ORDER BY metadata.device"

client = Aws::Athena::Client.new(region: AWS_REGION)
athena_util = AthenaUtil.new(client)
resp = athena_util.query(query_string, OUTPUT_LOCATION)
result << StatisticsUtil.calculate(resp)

write_file(RESULT_FILE, result.transpose)

puts 'Complete!'
