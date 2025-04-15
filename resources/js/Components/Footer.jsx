import React from 'react';
import { Link } from '@inertiajs/react';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="row">
                    {/* Quick Links */}
                    <div className="col-sm-5">
                        <div className="quick-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <img src="/assets/images/right-arrow.webp" alt="arrow" />
                                    <Link href="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <img src="/assets/images/right-arrow.webp" alt="arrow" />
                                    <Link href="/services">Services</Link>
                                </li>
                                <li>
                                    <img src="/assets/images/right-arrow.webp" alt="arrow" />
                                    <Link href="/contact">Contact</Link>
                                </li>
                                <li>
                                    <img src="/assets/images/right-arrow.webp" alt="arrow" />
                                    <Link href="/faq">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-sm-3">
                        <div className="contact-info">
                            <h3>Contact Us</h3>
                            <div className="location-discription">
                                <img src="/assets/images/location.webp" alt="location" />
                                <p>123 Main Street, City, Country</p>
                            </div>
                            <div className="location-discription">
                                <img src="/assets/images/phone.webp" alt="phone" />
                                <p><a href="tel:+1234567890">+1 234 567 890</a></p>
                            </div>
                            <div className="location-discription">
                                <img src="/assets/images/clock.webp" alt="hours" />
                                <p>Mon - Fri: 9am - 6pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                            <div className="facebook-dis">
                                <h3>Like Us On Facebook</h3>
                                <iframe
                                    name="f13a2655a47217"
                                    width="500px"
                                    height="380px"
                                    ata-testid="fb:page Facebook Social Plugin"
                                    title="fb:page Facebook Social Plugin"
                                    frameBorder="0"
                                    allowtransparency="true"
                                    allowFullScreen="allowFullScreen"
                                    allow="encrypted-media"
                                    src={`https://www.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df318a4edf11138%26domain%3Dscoliolife.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fscoliolife.com%252Ffb1839846f28e4%26relation%3Dparent.parent&container_width=400&height=380&hide_cover=true&href=en&locale=en_GB&sdk=joey&show_facepile=false&small_header=true&tabs=timeline&width=500`}
                                    style={{ border: "none", visibility: "visible", width: "400px", height: "380px" }}
                                    className=""
                                ></iframe>
                            </div>
                        </div>
                 
                </div>
                <p className="text-center mt-4">© 2025 Scoliolife. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
