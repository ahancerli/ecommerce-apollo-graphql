import './App.css'
import React, { useState } from 'react'
import Header from './components/moleculs/Header'
import Container from './components/moleculs/Container'
import { BasketContext } from './Context/BasketContext'

function App() {
	const [basketInProduct, setBasketInProduct] = useState(0)

	return (
		<BasketContext.Provider value={{ basketInProduct, setBasketInProduct }}>
			<Header />
			<Container />
		</BasketContext.Provider>
	)
}

export default App
