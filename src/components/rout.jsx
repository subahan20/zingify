import { Route, Routes } from "react-router-dom"
import Home from "./home"
import Products from "./products"
import Cart from "./cart"
import Contact from "./contact"

const Rout = ({ products, setProducts, detail, view, close, setClose, cart, setCart, addToCart }) => {
    return (
        <Routes>
            <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} />} />
            <Route path="/product" element={<Products products={products} setProducts={setProducts} detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}
export default Rout