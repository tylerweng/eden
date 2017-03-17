# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

User.create(username: 'guest', password: 'password', email: 'user@gmail.com')
Track.create(user_id: 1, title: 'All We Know', artist: 'The Chainsmokers', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/01+All+We+Know+(feat.+Phoebe+Ryan).m4a', img_url: 'https://images.genius.com/b88df63fd6fa744089bb3b07188f4249.1000x1000x1.jpg')
Track.create(user_id: 1, title: 'Closer', artist: 'The Chainsmokers', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/01+Closer+(feat.+Halsey).m4a', img_url: 'https://images.genius.com/6e44a91448d28714d0a0f91a27193e91.1000x1000x1.jpg')
