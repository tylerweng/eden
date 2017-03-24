json.set! :users do
  json.array! @users do |user|
    json.extract! user, :username, :id
  end
end

json.set! :tracks do
  json.array! @tracks do |track|
    json.extract! track, :title, :img_url, :artist, :id, :track_url
    json.user track.user
  end
end
