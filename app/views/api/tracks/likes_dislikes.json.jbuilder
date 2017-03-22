like_status = 'netural'

json.array! @track.likes do |like|
  like_status = 'liked' if like.track_id == @track.id && like.user_id == current_user.id
end

json.array! @track.dislikes do |dislike|
  like_status = 'disliked' if dislike.track_id == @track.id && dislike.user_id == current_user.id
end

like_status
