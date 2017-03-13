# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:userId`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Stations
- `GET /api/stations/:stationId`
- `GET /api/users/:userId/stations`

### Tracks

- `GET /api/users/:userId/tracks/:trackId`
- `POST /api/users/:userId/tracks`

### Likes

- `POST /api/users/:userId/tracks/:trackId/likes`
- `DELETE /api/users/:userId/tracks/:trackId/likes`

### Artist Bookmarks

- `POST /api/users/:userId/bookmarks`
- `DELETE /api/users/:userId/bookmarks`

### Track Bookmarks

- `POST /api/users/:userId/tracks/:trackId/bookmarks`
- `DELETE /api/users/:userId/tracks/:trackId/bookmarks`
