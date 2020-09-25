require 'csv'

def write_file(file_path, data)
  CSV.open(file_path, 'w') do |csv|
    data.map { |row| csv << row }
  end
end
