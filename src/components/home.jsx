import { BsArrowRight, BsCurrencyDollar, BsEye } from "react-icons/bs"
import { Link } from "react-router-dom"
import { products } from "../products"
import { FiTruck } from "react-icons/fi"
import { BiHeadphone } from "react-icons/bi"
import { CiPercent } from "react-icons/ci"
import { homeProducts } from "../homeProducts"
import { AiOutlineCloseCircle, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"

const Home = ({ detail, view, close, setClose, addToCart }) => {
    return (
        <>
            {
                close ?
                    <div className="product_detail">
                        <div className="container">
                            <button onClick={() => setClose(false)} className="closebtn"><AiOutlineCloseCircle /></button>
                            {
                                detail.map((eachProduct) => {
                                    return (
                                        <div className="productbox" key={eachProduct.id}>
                                            <div className="image_box">
                                                <img src={eachProduct.image} alt={eachProduct.Title} />
                                            </div>
                                            <div className="detail">
                                                <h4>{eachProduct.Cat}</h4>
                                                <h2>{eachProduct.Title}</h2>
                                                <h3>{eachProduct.Price}</h3>
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="productbox"></div>
                        </div>
                    </div> : null
            }
            <div className="top_banner">
                <div className="container">
                    <div className="detail">
                        <h2>The Best Note Book Collection 2023</h2>
                        <Link to="/product" className="link">Shop Now <BsArrowRight /></Link>
                    </div>
                    <div className="img_box">
                        <img src="https://techcart.com.au/wp-content/uploads/2021/06/Apple-iPad-Pro-11-2021-5G-A2301-256GB-Space-Gray.jpeg" alt="sliderimg" style={{
                            width: "100%",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                        }} />
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    {
                        products.map(eachProduct => {
                            return (
                                <div className="box" key={eachProduct.id}>
                                    <div className="image_box">
                                        <img src={eachProduct.image} />
                                    </div>
                                    <div className="detail">
                                        <p>{eachProduct.products}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="icon">
                            <FiTruck />
                        </div>
                        <div className="detail">
                            <h3>Free Shipping</h3>
                            <p>Order above Rs5000</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BsCurrencyDollar />
                        </div>
                        <div className="detail">
                            <h3>Return & Refund</h3>
                            <p>Money Back Gaurenty</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <CiPercent />
                        </div>
                        <div className="detail">
                            <h3>Member Discount</h3>
                            <p>On every Order</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BiHeadphone />
                        </div>
                        <div className="detail">
                            <h3>Customer Support</h3>
                            <p>Every Time Call Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <h2>Top Products</h2>
                <div className="container">
                    {
                        homeProducts.map((currentProduct) => {
                            return (
                                <div className="box" key={currentProduct.id}>
                                    <div className="img_box">
                                        <img src={currentProduct.image} alt={currentProduct.Title} />
                                        <div className="icon">
                                            <li onClick={() => addToCart(currentProduct)}><AiOutlineShoppingCart /></li>
                                            <li onClick={() => view(currentProduct)}><BsEye /></li>
                                            <li><AiOutlineHeart /></li>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <p>{currentProduct.Cat}</p>
                                        <p>{currentProduct.Title}</p>
                                        <h4>RS {currentProduct.Price}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="banner">
                <div className="detail">
                    <h4>LATEST TECHNOLOGY ADDED</h4>
                    <h3>Apple ipad 10.2 9th Gen - 2021</h3>
                    <p><BsCurrencyDollar />986</p>
                    <Link to="/product" className="link">Shop Now <BsArrowRight /></Link>
                </div>
                <div className="img_box">
                    <img src="../../public/images/logo.png" alt="sliderimg" />
                </div>
            </div>
        </>
    )
}
export default Home