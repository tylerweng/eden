json.extract! track,
  :id,
  :title,
  :artist,
  :track_url,
  :img_url,
  :description

json.user do
  json.extract! track.user, :username
end
