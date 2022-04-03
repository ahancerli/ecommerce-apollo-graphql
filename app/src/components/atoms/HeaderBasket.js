import { BsFillBasketFill } from 'react-icons/bs'

const HeaderBasket = () => {
	return (
		<div className='basket-content'>
			<BsFillBasketFill />
			<span className='basket-price'>117.654 ₺</span>
		</div>
	)
}

export default HeaderBasket
