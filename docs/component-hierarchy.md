## Component Hierarchy

**SearchContainer**
- SearchBar
- SearchResultsContainer
  + StationsIndex

 **Footer**
 - Navbar
 - PlaybarContainer
   + CurrentTrack
   + ControlButtons

 **Header**
 - AuthFormContainer
   + AuthForm
 - HeaderBar
   + SearchContainer

**HomeContainer**
 - Home
 - HomeSidebar

**StationContainer**
 - StationsSidebar
 - NowPlayingStation

**UserProfileContainer**
 - ProfileSidebar
 - ProfileContainer
   + Bio
   + UserStationsContainer
     - UserStations
   + SimilarArtistsContainer
     - SimilarArtists
 - UserLikesContainer
   + UserLikesIndex
 - BookmarksContainer
   + BookmarksIndex


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/users/:userName" | "UserProfileContainer" |
| "/station/:stationId" | "StationContainer" |
| "/track/:trackId" | "TrackContainer" |
| "/new-track" | "NewTrackContainer" |
| "/search-results" | "SearchResultsContainer" |
