import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './src/typeDefs/typeDefs.js'
import resolvers from './src/resolvers/resolvers.js'
import cors from 'cors'

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()

server.applyMiddleware({ app })
app.use(cors())
app.listen({ port: 7000 }, () => {
	console.log(`Server Start http://localhost:7000${server.graphqlPath}`)
})
