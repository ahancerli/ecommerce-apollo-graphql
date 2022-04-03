import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
	{
		getProducts {
			id
			name
			image
			price
			description
			model
			brand
			createdAt
		}
	}
`
