# Endpoints

## Authorization and User Account Endpoints:

- /authorize - get authorization code
- /api/token - get access token
- /me - get user's profile information

## Search Endpoints:

- /search - search for content
- /search?type=artist - search for artists
- /search?type=album - search for albums
- /search?type=track - search for tracks
- /search?type=playlist - search for playlists

## Track and Album Endpoints:

- /tracks/{id} - get a track
- /tracks?ids={ids} - get multiple tracks
- /albums/{id} - get an album
- /albums?ids={ids} - get multiple albums

## Artist Endpoints:

- /artists/{id} - get an artist
- /artists?ids={ids} - get multiple artists
- /artists/{id}/albums - get an artist's albums
- /artists/{id}/top-tracks - get an artist's top tracks
- /artists/{id}/related-artists - get an artist's related artists

## Playlist Endpoints:

- /playlists/{id} - get a playlist
- /playlists?ids={ids} - get multiple playlists
- /playlists/{id}/tracks - get a playlist's tracks
- /users/{user_id}/playlists - get a user's playlists
- /users/{user_id}/playlists/{playlist_id}/followers - get a playlist's followers

## User Library Endpoints:

- /me/tracks - get a user's saved tracks
- /me/albums - get a user's saved albums
- /me/playlists - get a user's playlists
- /me/following?type=artist - get a user's followed artists

## Player Endpoints:

- /me/player/play - start or resume playback
- /me/player/pause - pause playback
- /me/player/next - skip to next track
- /me/player/previous - skip to previous track
- /me/player/seek - seek to a specific position in the current track
- /me/player/repeat - set repeat mode
- /me/player/volume - set volume level
- /me/player/shuffle - toggle shuffle mode

## Recommendations Endpoints:

- /recommendations - get recommended tracks
- /recommendations/available-genre-seeds - get available genre seeds for recommendations

## Browse Endpoints:

- /browse/new-releases - get new releases
- /browse/categories - get categories
- /browse/categories/{category_id}/playlists - get playlists for a category

> This is not an exhaustive list of all Spotify API endpoints, but it covers the main ones. You can find more detailed information about each endpoint, including its parameters and response data, in the Spotify Web API documentation.
