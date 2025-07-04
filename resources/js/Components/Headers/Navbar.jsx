import { Link } from "@inertiajs/react";
import React from "react";
import { PiUserCircle } from "react-icons/pi";

const Navbar = ({ user }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container">
                    <Link className="navbar-brand" href={route("home")}>
                        <img src="/logo.png" alt="logo(11)" />
                    </Link>
                    <button
                        className="navbar-toggler mobile-toogler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile_nav"
                        aria-controls="mobile_nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mobile_nav">
                        <ul className="navbar-nav navbar-light ">
                            <li className="nav-item">
                                <Link href={route("home")} className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={route("home")} className="nav-link">
                                    Articles
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={route("contact")} className="nav-link">
                                    Contact
                                </Link>
                            </li>
                            <div className="cart-header-design">
                                <Link to="/cart">
                                    <img
                                        src="/assets/images/shopping-basket.webp"
                                        alt="shop"
                                    />
                                </Link>
                                <div className="cart-header">
                                    <p className="quantity">0</p>
                                </div>
                                <div className="login-btns">
                                    <div className="login-btn-user">
                                        <PiUserCircle />
                                    </div>
                                    <div className="login-hover">
                                        <ul>
                                            <li>
                                                <Link href={route("login")}>
                                                    Login/Register
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/cart">Cart</Link>
                                            </li>
                                            {user && (
                                                <li>
                                                    <Link
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                    >
                                                        <span> Log Out </span>
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
