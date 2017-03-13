## Component Hierarchy

**SearchResultsContainer**
- Search
- StationIndex

 **Footer**
 - Navbar

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

**StationsContainer**
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
| "/stations" | "StationsContainer" |
| "/station/:stationId" | "UserProfileContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-note" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" |
