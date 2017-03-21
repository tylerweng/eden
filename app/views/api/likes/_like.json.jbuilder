json.extract! like,
  :id,
  :user_id,
  :track_id

json.user do
  json.extract! like.user, :username
end

json.track do
  json.extract! like.track, :title
end
