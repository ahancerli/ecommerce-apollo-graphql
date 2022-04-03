import InputSearch from '../atoms/InputSearch'
import HeaderBasket from '../atoms/HeaderBasket'
import HeaderUser from '../atoms/HeaderUser'
const Header = () => {
	return (
		<div className='header cotainer col-md-12'>
			<div className='col-md-1'></div>
			<div className='header-left col-md-8'>
				<div className='logo col-md-3'>Eteration</div>
				<div className='search-container col-md-4'>
					<InputSearch />
				</div>
			</div>
			<div className='header-right col-md-2'>
				<div className='basket-container'>
					<HeaderBasket />
				</div>
				<div className='user-container'>
					<HeaderUser />
				</div>
			</div>
			<div className='col-md-1'></div>
		</div>
	)
}

export default Header
