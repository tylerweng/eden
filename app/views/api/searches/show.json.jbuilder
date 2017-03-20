json.set! :users do
  json.array! @users do |user|
    json.extract! user, :username
  end
end

json.set! :tracks do
  json.array! @tracks do |track|
    json.extract! track, :title
    json.username track.user.username
  end
end
