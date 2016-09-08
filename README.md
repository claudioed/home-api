## Api setup

- Run `npm install`
- Run `bash generate-ssl-certs.sh` to generate ssl certs
- Create a `.env` file containing environment details (see .env.example as an example)

## Run scripts

npm start - run the microservice in dev mode - start db, nodemon (with watch), eslint

npm run prod - run the microservice in production mode - start db, forever

npm run nodemon - runs microservice nodemon only instance

npm run forever - runs microservice forever only instance

npm run lint-js - runs js linter

npm run tests - runs unit tests

## Environment variables

Foreman uses .env to get specific environment variables.
