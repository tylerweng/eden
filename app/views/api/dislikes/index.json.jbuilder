json.array! @dislikes do |dislike|
  json.partial! 'api/dislikes/dislike', dislike: dislike
end
