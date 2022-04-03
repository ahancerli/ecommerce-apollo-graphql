import { AiOutlineSearch } from 'react-icons/ai'

const InputSearch = () => {
	return (
		<div className='form-group has-search'>
			<AiOutlineSearch className=' form-control-feedback' />
			<input className='form-control' type='text' placeholder='Search' />
		</div>
	)
}

export default InputSearch
