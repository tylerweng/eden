# Eden

[eden.audio][eden] is your radio personalized. Inspired by Pandora,
Eden allows users to create their own personalized stations based on
artists or songs.

Eden is a personal project by Tyler Weng.

[![eden.audio][homepage]][eden]

## Features

[![eden.audio][my stations]][eden]

- User accounts with secure authentication
- Uninterrupted music streaming with controls
- Audio uploading and management
- Creating stations by searching for tracks or artists
- Liking, unliking and disliking stations

[![eden.audio][station]][eden]
## Project Design

Eden was designed and built in two weeks. A [proposal][proposal] was
drafted for an overall project framework with an accompanying timeline.
Basalmiq Mockups was used to create [wireframes][wireframes].

## Technology

Eden is a single-page application that utilizes Ruby on Rails and a
PostgreSQL database on the backend, with a React.js and Redux
architectural framework on the frontend. Please refer to the
[technical specifications][technical specifications] for more detail.

## Future Implementations

- Enhanced search functionality to search by genre and features
- Enhanced station discovery to better accommodate user likes and dislikes

[eden]: http://eden.audio
[homepage]: https://s3-us-west-1.amazonaws.com/eden-audio/application_images/Homepage.png
[station]: https://s3-us-west-1.amazonaws.com/eden-audio/application_images/Station.png
[my stations]: https://s3-us-west-1.amazonaws.com/eden-audio/application_images/MyStations.png
[proposal]: https://github.com/tylerweng/eden/blob/master/docs/README.md
[wireframes]: https://github.com/tylerweng/eden/tree/master/docs/wireframes
[technical specifications]: https://github.com/tylerweng/eden/blob/master/docs/technical-specifications.md
