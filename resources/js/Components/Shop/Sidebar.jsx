import { Link } from '@inertiajs/react';
import React from 'react';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-design">
                    <div className="sidebar-sec">
                        <div>
                            <h2 className="widget-title">Scoliosis Pillow</h2>
                            <div className="textwidget custom-html-widget">
                                <div className="ads_scoliopillow_offers">
                                    <Link to="/en/product/scoliosis-pillow" rel="noopener">
                                        <img
                                            loading="lazy"
                                            src="https://sladmin.scoliolife.com/uploads/2023/03/Scoliogig_resutls-1.gif"
                                            style={{ width: "100%", height: "222px" }}
                                            alt=""
                                        />
                                    </Link>
                                    <div className="ads_scoliopillow_text"></div>
                                </div>
                            </div>
                        </div>

                        <div className="textwidget custom-html-widget">
                            <ul className="product-categories">
                                <h2 className="widget-title">PRODUCT CATEGORIES</h2>
                                <li className="cat-item cat-item-1590">
                                    <Link to="/en/product-category/consultation">Consultation</Link>
                                    <span className="count">(2)</span>
                                </li>
                                <li className="cat-item cat-item-49">
                                    <Link to="/en/product-category/books">Scoliosis Books</Link>
                                    <span className="count">(5)</span>
                                </li>
                                <li className="cat-item cat-item-46">
                                    <Link to="/en/product-category/equipment">Scoliosis Equipment</Link>
                                    <span className="count">(12)</span>
                                </li>
                            </ul>

                            <div>
                                <h2 className="widget-title">Our Promise</h2>
                                <div className="textwidget custom-html-widget">
                                    <div className="ads_scoliopillow_offers">
                                        <Link to="/" rel="noopener">
                                            <img
                                                loading="lazy"
                                                src="https://sladmin.scoliolife.com/uploads/2022/12/Our-Promise-EN.png"
                                                style={{ width: "100%", height: "222px" }}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="ads_scoliopillow_text"></div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="ads_scoliopillow_offers">
                                    <Link to="/en/bottom-image" rel="noopener">
                                        <img
                                            loading="lazy"
                                            src="https://sladmin.scoliolife.com/uploads/2023/04/Dr.Kevin_EN.png"
                                            style={{ width: "100%", height: "222px" }}
                                            alt=""
                                        />
                                    </Link>
                                    <div className="ads_scoliopillow_text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
