json.extract! chore, :id, :title, :amount, :completed, :created_at, :updated_at
json.url chore_url(chore, format: :json)
