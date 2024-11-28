import { AiOutlineCloseCircle, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import productdetails from "../productDetails";
import { useAuth0 } from "@auth0/auth0-react";

const Products = ({ products, setProducts, detail, view, close, setClose, addToCart }) => {

    const { loginWithRedirect, isAuthenticated } = useAuth0()

    const filteredProduct = (products) => {
        const update = productdetails.filter((x) => {
            return x.Cat === products;
        });
        setProducts(update);
    };

    const AllProducts = () => {
        setProducts(productdetails);
    };

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
            <div className="products">
                <h2># Products</h2>
                <p>Home - Products</p>
                <div className="container">
                    <div className="filter">
                        <div className="categories">
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={() => AllProducts()}> All Products</li>
                                <li onClick={() => filteredProduct("Headphones")}>Headphones</li>
                                <li onClick={() => filteredProduct("Laptop")}>Laptop</li>
                                <li onClick={() => filteredProduct("Smartwatch")}>Smartwatch</li>
                                <li onClick={() => filteredProduct("Television")}>Television</li>
                                <li onClick={() => filteredProduct("Camera")}>Camera</li>
                            </ul>
                        </div>
                    </div>
                    <div className="productbox">
                        <div className="container">
                            {
                                products.map((eachProduct) => {
                                    return (
                                        <div key={eachProduct.id} className="box">
                                            <div className="image_box">
                                                <img src={eachProduct.image} alt={eachProduct.Title} />
                                                <div className="icon">
                                                    {
                                                        isAuthenticated ? <li onClick={() => addToCart(eachProduct)}><AiOutlineShoppingCart /></li> : <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart /></li>
                                                    }
                                                    <li onClick={() => view(eachProduct)}><BsEye /></li>
                                                    <li><AiOutlineHeart /></li>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <p>{eachProduct.Cat}</p>
                                                <h3>{eachProduct.Title}</h3>
                                                <h4>{eachProduct.Price}</h4>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;