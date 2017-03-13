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

### Artists

- `GET /api/artists/:artistId`

### Albums

- `GET /api/artists/:artistId/albums/:albumId`

### Tracks

- `GET /api/artists/:artistId/albums/:albumId/tracks/:trackId`

### Likes

- `POST /api/artists/:artistId/albums/:albumId/tracks/:trackId/likes`

### Artist Bookmarks

- `POST /api/artists/:artistId/bookmarks`
- `DELETE /api/artists/:artistId/bookmarks`

### Album Bookmarks

- `POST /api/artists/:artistId/albums/:albumId/bookmarks`
- `DELETE /api/artists/:artistId/albums/:albumId/bookmarks`

### Track Bookmarks

- `POST /api/artists/:artistId/albums/:albumId/tracks/:trackId/bookmarks`
- `DELETE /api/artists/:artistId/albums/:albumId/tracks/:trackId/bookmarks`
