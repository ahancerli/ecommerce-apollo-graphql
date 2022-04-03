import Product from './../models/Product.js'

const resolvers = {
	Query: {
		getProducts: async () => {
			const response = await Product.getProducts()
			return response
		},
		getProduct: async (parent, args) => {
			const response = await Product.getProduct(args.id)
			return response
		},
	},
}

export default resolvers
