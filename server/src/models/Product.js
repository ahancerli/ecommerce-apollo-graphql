import axios from 'axios'

class Product {
	static async getProducts() {
		try {
			const response = await axios.get(
				'https://5fc9346b2af77700165ae514.mockapi.io/products'
			)
			if (response.status === 200) {
				return response.data
			} else {
				console.log('response.status', response.status)
			}
		} catch (error) {
			console.log('error', error)
		}
	}

	static async getProduct(id) {
		try {
			const response = await axios.get(
				`https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`
			)
			if (response.status === 200) {
				return response.data
			} else {
				console.log('response.status', response.status)
			}
		} catch (error) {
			console.log('error', error)
		}
	}
}

export default Product
