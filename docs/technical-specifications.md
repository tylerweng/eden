# Frontend

Eden is a single-page application build using the React.js framework.

## npm

Node package manager [(npm)][npm] is used to install all frontend dependencies.

## React & Flux

Frontend components are built using the React.js framework following
[Facebook's Flux architecture][fb].

## jQuery

[jQuery][jQuery] is used to make AJAX requests to the Rails server.

# Backend

Eden runs on Ruby on Rails and is hosted on Heroku. The backend provides
RESTful APIs and responds with JSON data.

## Heroku

NewRelic APM is used to automatically ping the Heroku dyno, keeping it
awake for rapid client response.

## Database

PostgreSQL RBDMS is required for all applications hosted on Heroku.

[npm]: https://www.npmjs.com/

[fb]: https://facebook.github.io/flux/docs/overview.html

[jQuery]: https://jquery.com/
