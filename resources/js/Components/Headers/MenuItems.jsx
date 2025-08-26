import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";

const MenuItems = ({ items, currentLang, toggleMenu, handleMouseEnter, handleMouseLeave, openMenus }) => {

    const getLink = (link) => {
        return `/${currentLang}/${link}`.replace(/\/+/g, '/');
    };

    return (
        <Fragment>
            {items.map((item, index) => {
                const hasChildren = item.child_recursive.length > 0;

                return (
                    <Fragment key={item.id}>
                        {!hasChildren ? (
                            <Link
                                className="nav-link"
                                href={getLink(item.link)}
                                key={index}
                            >
                                {item.label}
                                {item.icon && <img src={item.icon} alt="" />}
                            </Link>
                        ) : (
                            <li
                                key={index}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={() => handleMouseLeave(item.id)}
                                className={`nav-item dropdown dropdown-${item.class}`}
                            >
                                <Link
                                    className="nav-link dropdown-toggle"
                                    id={`dropdownMenuButton${item.class}`}
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded={openMenus[item.id] ? "true" : "false"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleMenu(item.id);
                                    }}
                                >
                                    {item.label}
                                    {item.icon && <img src={item.icon} alt="" />}
                                </Link>

                                {openMenus[item.id] && (
                                    <div
                                        className={`dropdown-menu sm-menu-${item.class}`}
                                        aria-labelledby={`navbarDropdown${item.class}`}
                                    >
                                        <div className="row test2 qwe">
                                            {item.child_recursive.map((child) => (
                                                <Fragment key={child.id}>
                                                    {child.child_recursive.length <= 0 ? (
                                                        <div
                                                            className={`col-sm-12 col-lg-12 mb-12 ${child.class}`}
                                                        >
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={getLink(child.link)}
                                                                        onClick={() => toggleMenu(item.id)}
                                                                    >
                                                                        {child.label}
                                                                        {child.icon && <img src={child.icon} alt="" />}
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className={`col-sm-4 col-lg-4 mb-4 ${child.class}`}
                                                        >
                                                            <p>{child.label}</p>
                                                            {child.child_recursive.map((subChild) => (
                                                                <Link
                                                                    key={subChild.id}
                                                                    className={`dropdown-item ${subChild.id}`}
                                                                    href={getLink(subChild.link)}
                                                                    onClick={() => toggleMenu(item.id)}
                                                                >
                                                                    {subChild.icon && (
                                                                        <img src={subChild.icon} alt="" />
                                                                    )}
                                                                    {subChild.label}
                                                                </Link>
                                                            ))}
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
            })}
        </Fragment>
    );
};

export default MenuItems;