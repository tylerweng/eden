## Component Hierarchy

**SearchResultsContainer**
- Search
- StationIndex

 **Footer**
 - Navbar
 - Playbar

 **Header**
 - AuthFormContainer
   + AuthForm
 - HeaderBar
   + SearchResultsContainer

**HomeContainer**
 - Home
 - Sidebar
 - SearchResultsContainer
 - Footer

**ArtistProfileContainer**
 - ArtistProfile

**AlbumProfileContainer**
 - AlbumProfile
 - TracksContainer
   + Tracks

**TrackProfileContainer**
 - TrackProfile

**UserProfileContainer**
 - Heaader
 - UserLikesContainer
   + UserLikesIndex
 - BookmarksContainer
   + BookmarksIndex
 - Footer

**UserStationsContainer**
- UserStations

**StationContainer**
- Header
- LikesContainer
  + Likes
- TracksContainer
  + Tracks
 - SearchResultsContainer
 - Footer

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/stations" | "UserStationsContainer" |
| "/station/:stationId" | "StationContainer" |
| "/artist/:artistName" | "ArtistProfileContainer" |
| "/artist/:artistName/:albumName" | "AlbumProfileContainer" |
| "/artist/:artistName/:albumName/:trackName" | "TrackProfileContainer" |
| "/artist/:artistId" | "ArtistProfileContainer" |
