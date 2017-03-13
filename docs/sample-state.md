{
  currentUser: {
    id: 1,
    username: "tyler"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []}
  },
  artists: {
    1: {
      id: 1,
      name: "Maroon 5",
      albums: {
        1: {
          id: 1,
          artist_id: 1,
          title: "V",
          description: "Another hit album",
          genres: ["Pop", "R&B"],
          tracks: {
            1: {
              id: 1,
              album_id: 1,
              title: "Maps",
              description: "Another hit song"
            }
          }
        }
      }
    }
  }
}
