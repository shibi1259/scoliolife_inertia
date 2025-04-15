import React from "react";
// import MainNavbar from "./MainNavbar";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "@inertiajs/react";
import Navbar from "./Navbar";

export default function MainHeader({ user }) {
    return (
        <>
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <p>
                                Welcome to Scoliosis & Spine Correction Clinic
                            </p>
                        </div>
                        <div className="col-sm-5">
                            <section className="news-letter" id="News-letter">
                                <div className="news ">
                                    <form className="top-button">
                                        <input
                                            type="email"
                                            id="subsrcibe_email"
                                            maxLength="50"
                                            required
                                            placeholder="Your email here...."
                                        />
                                        <button type="submit" className="bt">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="middle-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 left_data">
                            <div className="header-details">
                                <div className="header-number-wrapper cll">
                                    <div className="mobile-icon">
                                        <FaWhatsapp />
                                    </div>
                                    <a
                                        target="_blank"
                                        href="https://api.whatsapp.com/send/?phone=6596567188"
                                    >
                                        +65 9656 7188
                                    </a>
                                </div>

                                <div className="header-number-wrapper">
                                    <div className="mobile-icon">
                                        <AiOutlinePhone />
                                    </div>
                                    <a href="tel:+6566352550">+65 6635 2550</a>
                                </div>
                                <div className="header-email-wrapper">
                                    <div className="email-icon">
                                        <CiMail />
                                    </div>
                                    <a href="mailto:enquiry@scoliosisclinic.com.sg">
                                        enquiry@scoliosisclinic.com.sg
                                    </a>
                                </div>
                                <div className="header-location-wrapper">
                                    <div className="location-icon">
                                        <CiLocationOn />
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/place/Scoliosis+%26+Spine+Correction+Clinic"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        302 Orchard Road #10-02, Singapore
                                        238862
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 right_data">
                            <div className="right-btn-wrapper">
                                <div className="book_consultation">
                                    <Link
                                        rel="noopener noreferrer"
                                        to="/online-booking"
                                    >
                                        <span>
                                            <img
                                                src="/assets/images/consultation-icon.webp"
                                                alt="consultation-icon"
                                            />
                                        </span>
                                        Book Consultation
                                    </Link>
                                </div>
                                <div className="js">
                                    <div
                                        className="language-picker js-language-picker"
                                        data-trigger-classname="btn btn--subtle"
                                    >
                                        Language Switcher
                                    </div>
                                </div>
                                <Link to="/shop" className="shop-btn">
                                    <span>
                                        <img
                                            src="/assets/images/shop icon.webp"
                                            alt="shop icon"
                                        />
                                    </span>
                                    Shop
                                </Link>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar user={user} />
        </>
    );
}
