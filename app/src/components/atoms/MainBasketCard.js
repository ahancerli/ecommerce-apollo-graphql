import BasketItem from './BasketItem'
const MainBasketCard = () => {
	return (
		<div className='main-basket-content'>
			<div className='main-basket-content-header'>Card</div>
			<div className='main-basket-content-body'>
				<BasketItem />
				<BasketItem />
			</div>
		</div>
	)
}

export default MainBasketCard
