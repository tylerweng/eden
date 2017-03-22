json.extract! dislike,
  :id,
  :user_id,
  :track_id

json.user do
  json.extract! dislike.user, :username
end

json.track do
  json.extract! dislike.track, :title
end
