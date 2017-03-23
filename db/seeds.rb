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
User.create(username: 'Steve', password: 'password', email: 'Steve@gmail.com')
User.create(username: 'Dylan', password: 'password', email: 'Dylan@gmail.com')
User.create(username: 'barrybluejeans', password: 'password', email: 'barrybluejeans@gmail.com')

Track.create(user_id: 1, title: 'All We Know', artist: 'The Chainsmokers', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/01+All+We+Know+(feat.+Phoebe+Ryan).m4a', img_url: 'https://images.genius.com/b88df63fd6fa744089bb3b07188f4249.1000x1000x1.jpg')
Track.create(user_id: 1, title: 'Closer', artist: 'The Chainsmokers', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/01+Closer+(feat.+Halsey).m4a', img_url: 'https://images.genius.com/6e44a91448d28714d0a0f91a27193e91.1000x1000x1.jpg')
Track.create(user_id: 1, title: "I Don't Mind", artist: 'Usher', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/7+-+Usher+-+I+Don_t+Mind+(ft.+Juicy+J).mp3', img_url: 'https://images.genius.com/c9fded365316ca48c58bda15652d08ce.300x300x1.png')
Track.create(user_id: 1, title: "Five More Hours", artist: 'Deorro', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/1-04+Five+More+Hours.m4a', img_url: 'https://images.rapgenius.com/d307a15e719f6c05733c1d2f1979dab9.500x500x1.jpg')
Track.create(user_id: 1, title: "Smoke Filled Room", artist: 'Mako', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/1-08+Smoke+Filled+Room.m4a', img_url: 'https://images.rapgenius.com/2ea5d2a953c5bad21b67617d3038e313.996x996x1.png')
Track.create(user_id: 1, title: "Stole The Show", artist: 'Kygo', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/1-02+Stole+the+Show+(feat.+Parson+James).m4a', img_url: 'https://images.rapgenius.com/16512ceddb45dc0e09614eb06cfdd499.1000x1000x1.jpg')
Track.create(user_id: 1, title: "Coming Over (Filous Remix)", artist: 'Filous', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/2-05+Coming+Over+(Filous+Remix).m4a', img_url: 'https://images.genius.com/066dfeb3cadca1887ad810e9eb254be6.333x333x1.png')
