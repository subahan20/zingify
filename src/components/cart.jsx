import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import "../App.css"

const Cart = ({ cart, setCart }) => {
    const decqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((eachProduct) => {
            return eachProduct.id === product.id ? { ...exist, qty: exist.qty - 1 } : eachProduct
        }))
    }

    const incqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((eachProduct) => {
            return eachProduct.id === product.id ? { ...exist, qty: exist.qty + 1 } : eachProduct
        }))
    }

    const remove = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if (exist.qty > 0) {
            setCart(cart.filter((x) => {
                x.id !== product.id
            }))
        }
    }

    const totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
    return (
        <>
            <div className="cart-container">
                {
                    cart.length === 0 &&
                    <div className="emptyCart">
                        <img src="https://img.freepik.com/premium-vector/empty-cart_701961-7086.jpg" alt="empty-cart" className="empty" />
                        <Link to="/" className="emptycartlink">Shop Now</Link>
                    </div>
                }
                <div className="contant">
                    {
                        cart.map((eachProduct) => {
                            return (
                                <div className="cart_item" key={eachProduct.id}>
                                    <div className="image_box">
                                        <img src={eachProduct.image} alt={eachProduct.Title} />
                                    </div>
                                    <div className="detail">
                                        <div className="info">
                                            <h4>{eachProduct.Cat}</h4>
                                            <h3>{eachProduct.Title}</h3>
                                            <p>RS {eachProduct.Price}</p>
                                            <div className="qty">
                                                <button className="decQty" onClick={() => decqty(eachProduct)}>-</button>
                                                <input type="text" value={eachProduct.qty} />
                                                <button className="incQty" onClick={() => incqty(eachProduct)}>+</button>
                                            </div>
                                            <h4 className="subtotal">RS {eachProduct.Price * eachProduct.qty}</h4>
                                        </div>
                                        <div className="close">
                                            <button onClick={() => remove(eachProduct)}><AiOutlineClose /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    cart.length > 0 &&
                    <>
                        <h2 className="totalprice">RS {totalprice}</h2>
                        <button className="checkout">Checkout</button>
                    </>
                }
            </div>
        </>
    )
}
export default Cart