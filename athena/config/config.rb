require 'time'

begin
  START_DATE = Date.parse(ENV['START_DATE']).to_s
  END_DATE = Date.parse(ENV['END_DATE']).to_s
rescue StandardError
  raise 'Date format error!'
end
