import Banner from "@/Components/Banner";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import Form from "./Form";

const Contact = () => {
    return (
        <AuthenticatedLayout>
            <Banner title="Contact Us" />

            <div className="contact_row_section">
                <div className="container">
                    <div className="contact_deatails_section">
                        <div className="contact_item_content">
                            <ul className="contact_box">
                                <li className="item-content clearfix">
                                    <span className="hexagon">
                                        {" "}
                                        <i
                                            className="fa fa-map-o"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                    <p></p>
                                    <div className="text">
                                        <h3>
                                            <span title="Main Office">
                                                Main Office
                                            </span>
                                        </h3>
                                        <div>
                                            123 Main Street
                                            <br />
                                            City, State 12345
                                        </div>
                                        <p></p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="contact_item_content">
                            <ul className="contact_box">
                                <li className="item-content clearfix">
                                    <span className="hexagon">  
                                        {" "}
                                        <i
                                            className="fa fa-phone"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                    <p></p>
                                    <div className="text">
                                        <h3>
                                            <span title="Call Today">
                                                Call Today
                                            </span>
                                        </h3>
                                        <p>
                                            <a href="tel:+1234567890">
                                                +1 (234) 567-890
                                            </a>
                                            <br />
                                            <a
                                                className="call-btn-sec"
                                                href="https://api.whatsapp.com/send/?phone=1234567890&text=Hello%21%0A%0A%2AFOR+NEW+PATIENT%2A%0AName%3A%0ARelation+%28if+inquirer+is+not+patient%29%3A%0A%0A%2AENQUIRY%3A%2A%0A&type=phone_number&app_absent=0"
                                            >
                                                <span> +1 (234) 567-890 </span>

                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 448 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                                </svg>
                                            </a>{" "}
                                        </p>
                                        <p></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="contact_item_content">
                            <ul className="contact_box">
                                <li className="item-content clearfix">
                                    <span className="hexagon">
                                        {" "}
                                        <i
                                            className="fa fa-clock-o"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                    <p></p>
                                    <div className="text">
                                        <h3>
                                            <span title="Business Hours">
                                                Business Hours
                                            </span>
                                        </h3>
                                        <div>
                                            Monday - Friday: 9:00 AM - 5:00 PM
                                            <br />
                                            Saturday: 10:00 AM - 2:00 PM
                                            <br />
                                            Sunday: Closed
                                        </div>
                                        <p></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>

            <div className="contact-section">
                <div className="container">
                    <div className="new-design">
                        <h1 className="Bone-Spur">
                            <span>General Information Request</span>
                        </h1>
                        <h3 className="box-header animation-slide slide">
                            Online Appointment Form
                        </h3>
                        <div className="enquiry-hidden business-form ">
                            <div className="enquiry-form">
                                <Form />
                            </div>
                        </div>
                    </div>
                    <div className="form-page">
                        <h3 className="box-header cmain-address animation-slide slide">
                            ScolioLife Clinic
                        </h3>
                        <div className="contact_img">
                            <img
                                decoding="async"
                                src="https://scoliolife.com/uploads/2022/07/Contact-us-EN.png"
                                alt="Facebook Page"
                            />
                        </div>

                        <div className="address">
                            {/* <CalendarSchedulingButton /> */}

                            <p></p>
                            <ul className="contact-data">
                                <li className="clearfix social-location info-map">
                                    <i
                                        className="fa fa-map-o"
                                        aria-hidden="true"
                                    ></i>

                                    <p>
                                        Tong Building 302 Orchard Road #10-02
                                        Singapore 238862{" "}
                                    </p>
                                </li>
                                <li className="clearfix social-location info-map">
                                    <i
                                        className="fa fa-map-o"
                                        aria-hidden="true"
                                    ></i>

                                    <p>
                                        Unit No.7-6, Level 6, Boulevard
                                        Signature Office, Mid Valley City,
                                        Lingkaran Syed Putra, 58000 Kuala
                                        Lumpur, Malaysia{" "}
                                    </p>
                                </li>
                                <li className="clearfix social-location info-map">
                                    <i
                                        className="fa fa-map-o"
                                        aria-hidden="true"
                                    ></i>

                                    <p>
                                        SOHO 2 Graha Natura Jl. Graha Natura
                                        blok DS, Lontar, Kec. Sambikerep,
                                        Surabaya, Jawa Timur 60216, Indonesia{" "}
                                    </p>
                                </li>

                                <li className="clearfix social-mobile info-map">
                                    <i
                                        className="fa fa-mobile"
                                        aria-hidden="true"
                                    ></i>
                                    <div className="value">
                                        <a href="tel:+6591234567">
                                            +65 9123 4567
                                        </a>
                                        <br />
                                        <a href="https://api.whatsapp.com/send/?phone=6591234567&text=Hello%21%0A%0A%2AFOR+NEW+PATIENT%2A%0AName%3A%0ARelation+%28if+inquirer+is+not+patient%29%3A%0A%0A%2AENQUIRY%3A%2A%0A&type=phone_number&app_absent=0">
                                            +65 9123 4567
                                        </a>{" "}
                                    </div>
                                </li>
                                <li className="clearfix social-email info-map">
                                    <i
                                        className="fa fa-envelope-o"
                                        aria-hidden="true"
                                    ></i>
                                    <div className="value">
                                        Online Appointment:
                                        <a href="mailto:info@scoliolife.com">
                                            info@scoliolife.com
                                        </a>
                                    </div>
                                </li>
                                <li className="clearfix social-facebook info-map">
                                    <i
                                        className="fa fa-facebook"
                                        aria-hidden="true"
                                    ></i>
                                    <div className="value">
                                        Facebook:
                                        <a
                                            href="https://facebook.com/scoliolife"
                                            target="blank"
                                            rel="noopener"
                                        >
                                            {" "}
                                            facebook.com/scoliolife
                                        </a>
                                    </div>
                                </li>
                                <li className="clearfix social-facebook info-map">
                                    <i
                                        className="fa fa-youtube"
                                        aria-hidden="true"
                                    ></i>
                                    <div className="value">
                                        YouTube:
                                        <a
                                            href="https://youtube.com/scoliolife"
                                            target="blank"
                                            rel="noopener"
                                        >
                                            {" "}
                                            youtube.com/scoliolife
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="contact_quote">
                            <i
                                className="fa fa-quote-right"
                                aria-hidden="true"
                            ></i>
                            <h3 className="sentence template-quote-2 animated-element animation-slideLeft50 slideLeft50">
                                To inspire innovative solutions and promote
                                strategies that creates health independence for
                                scoliosis sufferers..
                            </h3>
                            <div className="clearfix">
                                <span className="sentence-author animated-element animation-slideLeft50 delay-600 slideLeft50">
                                    — Dr Kevin Lau
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-section">
                <div className="gmap">
                    <iframe
                        title="maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7850952266886!2d103.83273671432605!3d1.30397096208541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19923d7b4249%3A0xc0febfc7d057c4a!2sTong+Building%2C+302+Orchard+Rd%2C+238862!5e0!3m2!1sen!2sin!4v1457352737924"
                        frameBorder="0"
                        allowFullScreen="allowFullScreen"
                    ></iframe>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Contact;
