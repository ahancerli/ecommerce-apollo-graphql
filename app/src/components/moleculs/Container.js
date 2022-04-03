import FilterContent from '../atoms/FilterList'
import ProductList from './../atoms/ProductList'
import MainBasket from './../atoms/MainBasket'

const Container = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12 main-container'>
					<div className='filter-content col-md-2'>
						<FilterContent />
					</div>
					<div className='product-list col-md-8'>
						<ProductList />
					</div>
					<div className='main-basket col-md-2'>
						<MainBasket />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Container
