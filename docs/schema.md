# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## stations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
title       | string    | not null
description | text      |


## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
title       | string    | not null
track_url   | string    | not null
img_url     | string    | 
description | text      |

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
track_id    | integer   | not null, foreign key (references track), indexed

## genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
genre       | string    | not null

## track_genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | string    | not null, foreign key (references track), indexed
genre_id    | integer   | not null, foreign key (references genre), indexed

## artist_bookmarks
column name -----| data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references user), indexed
artist_id        | integer   | not null, foreign key (references artist), indexed

## track_bookmarks
column name -----| data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references user), indexed
track_id         | integer   | not null, foreign key (references track), indexed
