import { useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "/images/logo.png";

const Navbar = ({ searchbtn }) => {
    const [search, setSearch] = useState("");
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const navigate = useNavigate()

    return (
        <>
            <div className="free">
                <div className="icon">
                    <FaTruckMoving />
                </div>
                <p>FREE Shipping when shopping upto Rs 5000</p>
            </div>
            <div className="main_header">
                <div className="container">
                    <div className="logo">
                        <img src={Logo} width={60} style={{ borderRadius: "50%", cursor: "pointer" }} alt="Logo" onClick={() => navigate("/")} />
                    </div>
                    <div className="search-box">
                        <input
                            type="text"
                            value={search}
                            placeholder="Search Your Product...."
                            autoComplete="off"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={() => searchbtn(search)}>Search</button> {/* Trigger search */}
                    </div>
                    <div className="icon">
                        {isAuthenticated && (
                            <div className="account">
                                <div className="user_icon">
                                    <AiOutlineUser />
                                </div>
                                <p>{user.name}</p>
                            </div>
                        )}
                        <div className="second_icon">
                            <Link to="/" className="link">
                                <AiOutlineHeart />
                            </Link>
                            <Link to="/cart">
                                <BsBagCheck />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/" className="link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/product" className="link">
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="auth">
                        {isAuthenticated ? (
                            <button
                                onClick={() =>
                                    logout({ logoutParams: { returnTo: window.location.origin } })
                                }
                            >
                                <CiLogout />
                            </button>
                        ) : (
                            <button onClick={() => loginWithRedirect()}>
                                <CiLogin />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
