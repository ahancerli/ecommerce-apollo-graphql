import ProductItem from './ProductItem'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../graphql/Query'

const ProductList = () => {
	const { loading, error, data } = useQuery(GET_PRODUCTS)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error </p>
	return (
		<div className='product-list-content container'>
			{data.getProducts.lenght === 0 ? (
				<p>Ürün Bulunamadı</p>
			) : (
				data.getProducts.map(product => (
					<ProductItem key={product.id} product={product} />
				))
			)}
		</div>
	)
}

export default ProductList
