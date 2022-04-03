import { gql } from 'apollo-server-express'

const typeDefs = gql`
	type Query {
		getProducts: [Product!]!
		getProduct(id: ID!): Product!
	}

	type Product {
		id: String!
		createdAt: String
		name: String
		image: String
		price: String
		description: String
		model: String
		brand: String
	}
`

export default typeDefs
