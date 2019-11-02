json.extract! chore, :id, :user_id, :title, :amount, :completed, :created_at, :updated_at
json.url chore_url(chore, format: :json)
