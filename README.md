# Template Repo for Backend Services

You can use this repo to bootstrap new micro services.

## Tech Stack

- `yarn` as prefer package manager
- `express` as server
- `jest` as testing library
- `mongoose` as database modelling library
- `swagger-jsdoc` as API documentation tool

## Scripts

- `yarn dev` spin up local server in development mode
- `yarn prod` spin up local server in production mode
- `yarn test` fire up test in watch and detectOpenHandle mode
- `yarn lint` to run your code pass linter

## How to run this template?

1. `yarn install` to install all the dependencies.
1. Make sure you have local mongodb instance running.
1. Update the connection string to your mongodb instance in the `.env` file (You will need to create one if you don't have it already).
1. `yarn dev` to... yea launch a dev server, the server will start on port 3000 if you don't specify otherwise in the `.env` file.
1. Go to `http://localhost:<YOUR_PORT>/api-doc` to see what apis are avaliable in this template.
1. Happy coding and remember to write test and doc!!
