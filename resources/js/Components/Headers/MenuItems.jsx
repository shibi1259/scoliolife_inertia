import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";

// Mobile Menu Component for nested items
const MobileMenus = ({ item, scrollToTop, currentLanguage }) => {
    const getLink = (link) => {
        if (!link || link === '#') return '#';
        return `/${currentLanguage}/${link}`.replace(/\/+/g, '/');
    };
    const [open, setOpen] = React.useState(false);

    const handleClicking = () => {
        scrollToTop();
        setOpen((prev) => !prev);
    };

    return (
        <Fragment>
            <ul className="sub-menu">
                <li className="nonce-link menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                    <a
                        className="nav-link dropdown-toggle"
                        onClick={handleClicking}
                    >
                        {item.label}
                    </a>

                    {(open) ? (
                        <ul className="sub-menus">
                            {item.children.map((submenuItem) => (
                                <li key={submenuItem.id} className="menu-item menu-item-type-custom menu-item-object-custom menu-item-644158">
                                    <Link
                                        to={getLink(submenuItem.link)}
                                    >
                                        {submenuItem.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </li>
            </ul>
        </Fragment>
    );
};

// Desktop Menu Component
const DesktopMenus = (props) => {
    const {
        menuItem,
        currentLanguage,
        scrollToTop,
        handleMouseEnter,
        toggleMenu,
        handleMouseLeave,
        index,
        openMenus,
        isMobile,
        mobileScreen
    } = props;

    const getLink = (link) => {
        if (!link || link === '#') return '#';
        return `/${currentLanguage}/${link}`.replace(/\/+/g, '/');
    };

    const handleClicking = (id = null) => {
        scrollToTop();
        toggleMenu(id);
    };

    return (
        <Fragment>
            {(!menuItem.children || menuItem.children.length <= 0) ? (
                <Link
                    className="nav-link"
                    href={getLink(menuItem.link)}
                    onClick={scrollToTop}
                    key={index}
                >
                    {menuItem.label}
                </Link>
            ) : (
                <li
                    key={index}
                    onMouseEnter={() => handleMouseEnter(menuItem.id)}
                    onMouseLeave={() => handleMouseLeave(menuItem.id)}
                    className={`nav-item dropdown dropdown-${menuItem.class || ''}`}
                >
                    <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        id={`dropdownMenuButton${menuItem.class}`}
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={openMenus[menuItem.id] ? "true" : "false"}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu(menuItem.id);
                        }}
                    >
                        {menuItem.label}
                        {menuItem.icon && <img src={menuItem.icon} alt="" />}
                    </Link>

                    {openMenus[menuItem.id] && (
                        <div
                            className={`dropdown-menu sm-menu-${menuItem.class || ''}`}
                            aria-labelledby={`navbarDropdown${menuItem.class}`}
                        >
                            <div className="row test2 qwe">
                                {menuItem.children.map((item) => (
                                    <Fragment key={item.id}>
                                        {(!item.children || item.children.length <= 0) ? (
                                            <div className={`col-sm-12 col-lg-12 mb-12 ${item.class || ''}`}>
                                                <ul>
                                                    <li>
                                                        <Link
                                                            href={getLink(item.link)}
                                                            onClick={() => handleClicking(menuItem.id)}
                                                        >
                                                            {item.label}
                                                        </Link>
                                                        {item.icon && <img src={item.icon} alt="" />}
                                                    </li>
                                                </ul>
                                            </div>
                                        ) : (
                                            <div className={`col-sm-4 col-lg-4 mb-4 ${item.class || ''}`}>
                                                {isMobile ? (
                                                    <MobileMenus
                                                        item={item}
                                                        scrollToTop={scrollToTop}
                                                        currentLanguage={currentLanguage}
                                                        openMenus={openMenus}
                                                    />
                                                ) : (
                                                    <Fragment>
                                                        {item.link && item.link !== '#' ? (
                                                            <Link
                                                                href={getLink(item.link)}
                                                                className="dropdown-heading-link"
                                                                onClick={() => handleClicking(menuItem.id)}
                                                            >
                                                                {item.label}
                                                            </Link>
                                                        ) : (
                                                            <p>{item.label}</p>
                                                        )}
                                                        {item.children.map((submenuItem) => (
                                                            <Link
                                                                key={submenuItem.id}
                                                                className={`dropdown-item ${submenuItem.class || ''}`}
                                                                href={getLink(submenuItem.link)}
                                                                onClick={() => handleClicking(menuItem.id)}
                                                            >
                                                                {submenuItem.icon && <img src={submenuItem.icon} alt="" />}
                                                                {submenuItem.label}
                                                            </Link>
                                                        ))}
                                                    </Fragment>
                                                )}
                                            </div>
                                        )}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
            )}
        </Fragment>
    );
};

/**
 * Main Menu Wrapper Component
 */
const MenuItems = (props) => {
    const {
        items,
        currentLang,
        scrollToTop,
        handleMouseEnter,
        toggleMenu,
        handleMouseLeave,
        openMenus,
        isMobile,
        mobileScreen

    } = props;

    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-auto w-100 justify-content-center">
            {items.map((menuItem, index) => (
                <DesktopMenus
                    key={menuItem.id}
                    menuItem={menuItem}
                    currentLanguage={currentLang}
                    scrollToTop={scrollToTop}
                    handleMouseEnter={handleMouseEnter}
                    toggleMenu={toggleMenu}
                    handleMouseLeave={handleMouseLeave}
                    index={index}
                    openMenus={openMenus}
                    isMobile={isMobile}
                    mobileScreen={mobileScreen}
                />
            ))}
        </ul>
    );
};

export default MenuItems;