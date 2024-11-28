import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/nav.jsx';
import Rout from './components/rout';
import Footer from './components/footer';
import productdetails from './productDetails';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  const [products, setProducts] = useState(productdetails);
  const searchbtn = (products) => {
    const filtered = productdetails.filter((product) => {
      return product.Cat.toLowerCase() === products
    });
    setProducts(filtered);
  };

  const view = (product) => {
    setDetail([{ ...product }])
    setClose(true)
  }

  const addToCart = (products) => {
    const exist = cart.find((x) => {
      return x.id === products.id
    })
    if (exist) {
      alert("Already Item added in Cart")
    } else {
      setCart([...cart, { ...products, qty: 1 }])
      alert("product is added")
    }
  }
  return (
    <BrowserRouter>
      <Navbar searchbtn={searchbtn} />
      <Rout products={products} setProducts={setProducts} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addToCart={addToCart} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

