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


## artist_likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
artist_id   | integer   | not null, foreign key (references artists), indexed

## album_likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
album_id    | integer   | not null, foreign key (references albums), indexed

## track_likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
track_id    | integer   | not null, foreign key (references tracks), indexed

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
