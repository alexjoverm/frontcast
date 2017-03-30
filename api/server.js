const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')

// Constants
const PORT = process.env.PORT

const app = express()
const schema = require('./schemas')

app.use('/', bodyParser.json(), graphqlExpress({
  schema
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}))

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)