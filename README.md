#  `express-graphql-seed` — the seed for REST api and GraphQL

## Getting started
#### clone `express-graphql-seed` repository using git.
```
git clone https://github.com/mh-rafi/express-graphql-seed.git
cd express-graphql-seed
```

#### Install Dependencies
```
npm install
```
#### Run the Application
```
npm start
```
#### Build the Application
```
npm build
```
### Directory structure
```
config/
  env/
    index.js
    development.js
  express.js
  passport-config.js
  validation.js
  winston.js

server/
  controllers/
    auth.js
    user.js
  graphql/
    index.js
    queries.js
    types.js
  helpers/
    APIError.js
  models/
    user.js
  routes/
    index.js
    auth.js
    user.js
index.js
```