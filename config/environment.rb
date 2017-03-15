# Load the Rails application.
require_relative 'application'
Rails.application.configure do
  # Automatically inject JavaScript needed for LiveReload
  config.middleware.insert_after(ActionDispatch::Static, Rack::LiveReload)
end
# Initialize the Rails application.
Rails.application.initialize!
