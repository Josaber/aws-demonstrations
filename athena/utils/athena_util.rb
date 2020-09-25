require 'aws-sdk-athena'

class AthenaUtil
  def initialize(client)
    @client = client
  end

  def query(query_string, output_location)
    query_id = start_query(@client, query_string, output_location)

    status = 'RUNNING'
    while status == 'RUNNING'
      sleep 5
      status = check_query_status(@client, query_id)
    end

    get_query_result(@client, query_id).result_set.rows if status == 'SUCCEEDED'
  end

  private

  def start_query(client, query_string, output_location)
    client.start_query_execution(
      query_string: query_string,
      query_execution_context: { database: 'default' },
      result_configuration: {
        output_location: output_location,
        encryption_configuration: {
          encryption_option: 'SSE_S3'
        }
      }
    ).query_execution_id
  end

  def check_query_status(client, query_id)
    client.get_query_execution(
      query_execution_id: query_id
    ).query_execution.status.state
  end

  def get_query_result(client, query_id)
    client.get_query_results(
      query_execution_id: query_id
    )
  end
end
