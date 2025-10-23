import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { PiUserCircle } from "react-icons/pi";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { getLocaleForRoute } from "@/Utils/localeHelper";
import { getMenuItems } from "@/API/api";
import MenuItems from "./MenuItems";

const Navbar = ({ user, header }) => {
    const { t, currentLocale, loading } = useLaravelReactI18n();
    const lang = currentLocale();
    const currentLang = getLocaleForRoute(lang);
    const [openMenus, setOpenMenus] = useState({});

    // Toggle dropdown menu
    const toggleMenu = (id) => {
        setOpenMenus((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Handle mouse enter to open dropdown
    const handleMouseEnter = (id) => {
        setOpenMenus((prev) => ({
            ...prev,
            [id]: true,
        }));
    };

    // Handle mouse leave to close dropdown
    const handleMouseLeave = (id) => {
        setOpenMenus((prev) => ({
            ...prev,
            [id]: false,
        }));
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container">
                    <Link className="navbar-brand" href={route("home", { locale: currentLang })}>
                        <ApplicationLogo />
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


                            {/* Menus Here */}
                            {header && (
                                <MenuItems
                                    items={header[0].items}
                                    currentLang={currentLang}
                                    toggleMenu={toggleMenu}
                                    handleMouseEnter={handleMouseEnter}
                                    handleMouseLeave={handleMouseLeave}
                                    openMenus={openMenus}
                                    isMobile={window.innerWidth <= 991}
                                    mobileScreen={window.innerWidth <= 767}
                                    scrollToTop={() => window.scrollTo(0, 0)}
                                />
                            )}

                            <div className="cart-header-design">
                                <Link href={route('shop.cart', { locale: currentLang })}>
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
                                            {!user ? <li>
                                                <Link href={route("login", { locale: currentLang })}>
                                                    Login/Register
                                                </Link>
                                            </li> : <li>
                                                <Link href={route("dashboard", { locale: currentLang })}>
                                                    My Account
                                                </Link>
                                            </li>}
                                            <li>
                                                <Link to="/cart">Checkout</Link>
                                            </li>
                                            {user && (
                                                <li>
                                                    <Link
                                                        href={route("logout", { locale: currentLang })}
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
