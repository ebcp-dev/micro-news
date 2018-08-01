# Micro News API

## Retrieve news headlines from the publist.ai api with Zeit's Micro library.

- Make a GET request to the '/' route.

## POST to the api to create your own news headline.

- Make a POST request to the '/' route.

## Created with:

- Zeit's Micro library
- Sequelize/PostgreSQL
- microrouter
- axios
- tested with ava(couldn't get this done)

## Configuration:

- Postgres (Local):
  - DB name: 'micro-db'
  - User: 'postgres'
  - Password: 'admin'

## Deployment:

- Create an Amazon RDS PostgreSQL instance and use those details in config/db.js.
- Use Zeit's Now to deploy app.

## TODO:

- Fix ava unit tests.
  - I get a database error everytime I run the tests.
- Implement authentication services.
  - I would have implemented a jwt authentication service, but I don't have a lot of experience with Micro so I couldn't get it done in a timely manner.
