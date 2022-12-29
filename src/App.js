import './App.css';
import React, { useState } from "react"
import Cart from './components/cart/Cart';
import { BrowserRouter,  Routes,  Route } from "react-router-dom"
import Header from './components/Header/Header';
import Pages from './pages/Pages'
import Data from './mainUi/Data'
import Footer from './components/footer/Footer'
import Sdata from './mainUi/shops/Sdata'
import Checkout from './mainUi/Checkout/Checkout';
import ThankYou from './mainUi/Checkout/ThankYou';

function App() {
  const { productItems } = Data
  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
  
      <>
      <BrowserRouter>
        <Header CartItem={CartItem} />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}  exact>
           
          </Route>
          <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} exact>
          </Route>
          <Route path='/checkout' element={<Checkout CartItem={CartItem} />} exact></Route>
          <Route path='/success' element={<ThankYou/>} exact></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
