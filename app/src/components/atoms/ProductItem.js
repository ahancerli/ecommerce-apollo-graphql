import { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'

const ProductItem = ({ product }) => {
	const { basketInProduct, setBasketInProduct } = useContext(BasketContext)

	return (
		<div className='card col-md-3 card-item'>
			<img src={product.image} alt='' />
			<div className='card-body'>
				<h5 className='card-title card-price'>{product.price} ₺</h5>
				<p className='card-text card-name'>{product.name}</p>
				<a href='#' className='btn btn-primary'>
					Add To Cart
				</a>
			</div>
		</div>
	)
}

export default ProductItem
