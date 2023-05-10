import Header from './components/Header'
import Landing from './components/Landing'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' Component={Landing} />
        <Route path='/productDetails' Component={ProductDetails} />
        <Route path='/viewCart' Component={Cart} />
      </Routes>
    </>
  )
}

export default App
