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
User.create(username: 'Diane', password: 'password', email: 'Diane@gmail.com')
User.create(username: 'Joe', password: 'password', email: 'Joe@gmail.com')

Track.create(user_id: 1, title: 'All We Know', artist: 'The Chainsmokers', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/01+All+We+Know+(feat.+Phoebe+Ryan).m4a', img_url: 'https://s3-us-west-1.amazonaws.com/eden-audio/track_images/the-chainsmokers-all-we-know.jpg')
Track.create(user_id: 1, title: 'Closer', artist: 'The Chainsmokers', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/01+Closer+(feat.+Halsey).m4a', img_url: 'https://s3-us-west-1.amazonaws.com/eden-audio/track_images/the-chainsmokers-closer.jpg')
Track.create(user_id: 1, title: "I Don't Mind", artist: 'Usher', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/7+-+Usher+-+I+Don_t+Mind+(ft.+Juicy+J).mp3', img_url: 'https://s3-us-west-1.amazonaws.com/eden-audio/track_images/usher-i-dont-mind.png')
Track.create(user_id: 1, title: "Five More Hours", artist: 'Deorro', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/1-04+Five+More+Hours.m4a', img_url: 'https://s3-us-west-1.amazonaws.com/eden-audio/track_images/deorro-five-more-hours.jpg')
Track.create(user_id: 1, title: "Smoke Filled Room", artist: 'Mako', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/1-08+Smoke+Filled+Room.m4a', img_url: 'https://s3-us-west-1.amazonaws.com/eden-audio/track_images/mako-smoke-filled-room.png')
Track.create(user_id: 1, title: "Stole The Show", artist: 'Kygo', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/1-02+Stole+the+Show+(feat.+Parson+James).m4a', img_url: 'https://s3-us-west-1.amazonaws.com/eden-audio/track_images/kygo-stole-the-show.jpg')

Track.create(user_id: 1, title: 'Stay', artist: 'Zedd', track_url:'https://s3-us-west-1.amazonaws.com/eden-audio/tracks/Zedd+%E2%80%93+Stay+(Lyrics++Lyric+Video)+ft.+Alessia+Cara+%5BFuture+Bass%5D.mp3', img_url: 'https://s3-us-west-1.amazonaws.com/eden-audio/track_images/zedd-stay.jpg')
Track.create(user_id: 1, title: "I Don't Wanna Live Forever", artist: "Zayn", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/ZAYN+-+I+Don't+Wanna+Live+Forever+(Acoustic).mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/zayn-dont-wanna-live-forever.jpg")
Track.create(user_id: 1, title: "TG4M", artist: "Zara", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/Zara+Larsson+-+TG4M+-+Lyrics+%5BHD%5D.mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/zara-tg4m.jpg")
Track.create(user_id: 1, title: "Something Just Like This", artist: "Coldplay", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/The+Chainsmokers+%26+Coldplay+-+Something+Just+Like+This.mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/coldplay-something-just-like-this.jpg")
Track.create(user_id: 1, title: "Romantic (NOTD Remix)", artist: "Stanaj", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/Stanaj+-+Romantic+(NOTD+Remix)+(Lyrics).mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/stanaj-romantic.jpg")
Track.create(user_id: 1, title: "Bad Woman", artist: "Stanaj", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/Stanaj+-+Bad+Woman.mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/stanaj-bad-woman.jpg")
Track.create(user_id: 1, title: "Don't Leave", artist: "Snakehips", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/Snakehips+ft.+M%C3%98+-+Don't+Leave.mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/snakehips-dont-leave.jpg")
Track.create(user_id: 1, title: "Trouble", artist: "R3hab", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/R3hab+-+Trouble+Feat.+Verite+(Mp3FB.com).mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/r3hab-trouble.jpg")
Track.create(user_id: 1, title: "Sunset Lover", artist: "Petit Biscuit", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/PETIT+BISCUIT+-+Sunset+Lover+(Mp3FB.com).mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/petit-biscuit-sunset-lover.jpg")
Track.create(user_id: 1, title: "Kids (SeeB Remix)", artist: "One Republic", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/OneRepublic+%E2%80%93+Kids+(SeeB+Remix)+%5BPremiere%5D.mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/one-republic-kids.jpg")
Track.create(user_id: 1, title: "Thinking About It (KVR Remix)", artist: "Nathan Goshen", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/Nathan+Goshen+-+Thinking+About+It+(KVR+Remix)+%5BLyrics%5D.mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/nathan-goshen-thinking-about-it.jpg")
Track.create(user_id: 1, title: "I Took A Pill In Ibiza", artist: "Nathan Goshen", track_url:"https://s3-us-west-1.amazonaws.com/eden-audio/tracks/Nathan+Goshen+-+Thinking+About+It+(KVR+Remix)+%5BLyrics%5D.mp3", img_url:"https://s3-us-west-1.amazonaws.com/eden-audio/track_images/nathan-goshen-thinking-about-it.jpg")
