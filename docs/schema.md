# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
artist_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | text      |
genres      | string    | array, default: []

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
album_id    | integer   | not null, foreign key (references albums), indexed
title       | string    | not null
description | text      |
features    | string    | array, default: []

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
track_id    | integer   | not null, foreign key (references tracks), indexed

## genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
genre       | string    | not null
album_id    | integer   | not null, foreign key (references album), indexed

## features
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feature     | string    | not null
track_id    | integer   | not null, foreign key (references track), indexed

## artist_bookmarks
column name -----| data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references user), indexed
artist_id        | integer   | not null, foreign key (references artists), indexed

## album_bookmarks
column name -----| data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references user), indexed
album_id         | integer   | not null, foreign key (references albums), indexed

## track_bookmarks
column name -----| data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references user), indexed
track_id         | integer   | not null, foreign key (references tracks), indexed
