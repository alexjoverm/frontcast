const schema = [`
  # Dog places where your dog can poop
  type DogPlace {
    id: String!
    name: String
    terrain: String
  }
  type Query {
    dogPlaces: [DogPlace]
  }
  schema {
    query: Query
  }
`]

const resolvers = {
  Query: {
    dogPlaces(obj, args, context) {
      return [
        { id: '1', name: 'pepe', terrain: 'something' },
        { id: '2', name: 'paco', terrain: 'something else' }
      ]
    }
  }
}


module.exports = {
  schema,
  resolvers
}