// import React from 'react'
// import ContactForm from '../Forms/ContactForm';

// const Contact = () => {
//     return (
//         <>
//             <div className="patients-form" data-aos="fade-up">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-sm-5">
//                             <div className="my-form home-form">
//                                 {/* main form */}

//                                 <ContactForm
//                                     col="6"
//                                     optionPosition="other"
//                                     type="home-page"
//                                     title="GENERAL ENQUIRY"
//                                     labels={false}
//                                     icons={true}
//                                 />
//                             </div>
//                             {/* form end */}
//                         </div>
//                         <div className="col-sm-7">
//                             <div className="testimonial-heading" >
//                                 <h4>Patients praise</h4>
//                             </div>
//                             <div id="review" className="row carousal-lang-en">
//                                 <div className="col-md-4">
//                                     <div className="review-logo">
//                                         <div className="profile">
//                                             <div className="review-img">
//                                                 <img src={'/images/logos.png'} />
//                                             </div>
//                                             <div className="scolio-life">
//                                                 <strong>ScolioLife Scoliosis & Spine Correction Clinic</strong>
//                                             </div>
//                                         </div>
//                                         <div className="reviews">
//                                             {/* <TbStarFilled />
//                                             <TbStarFilled />
//                                             <TbStarFilled />
//                                             <TbStarFilled />
//                                             <TbStarFilled /> */}
//                                         </div>
//                                         <span>81 Google reviews</span>
//                                         <a href="http://search.google.com/local/reviews?placeid=ChIJB-KtPZIZ2jERM1CXqUSnpc8" target='_blank'>Write a review</a>
//                                     </div>
//                                 </div>

//                                 <div className="col-md-8">
//                                     <section id="testimonials">
//                                         <div className="testimonial-box-container">
//                                             {/* <ReviewCarousalView cols={2} rows={1} gap={10} loop /> */}
//                                         </div>
//                                     </section>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Contact;


import React, { useState } from 'react'

import { TbStarFilled } from "react-icons/tb";


import ContactForm from '../Forms/ContactForm';


export default function Contact() {


    return (
        <>
            <div className="patients-form" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="my-form home-form">
                                {/* main form */}

                                <ContactForm
                                    col="6"
                                    optionPosition="other"
                                    type="home-page"
                                    title='General Enquiry'
                                    labels={false}
                                    icons={true}
                                />

                            </div>
                            {/* form end */}
                        </div>
                        <div className="col-sm-7">
                            <div className="testimonial-heading" >
                                <h4>Praise From Patients</h4>
                            </div>
                            <div id="review" className={`row carousal-lang`}>

                                <div className="col-md-4">
                                    <div className="review-logo">
                                        <div className="profile">
                                            <div className="review-img">
                                                <img src={'/images/logos.png'} />
                                               
                                            </div>
                                            <div className="scolio-life">
                                                <strong>ScolioLife Scoliosis & Spine Correction Clinic</strong>
                                            </div>
                                        </div>
                                        <div className="reviews">
                                            <TbStarFilled />
                                            <TbStarFilled />
                                            <TbStarFilled />
                                            <TbStarFilled />
                                            <TbStarFilled />
                                        </div>
                                        <span>81 Google reviews</span>
                                        <a href="http://search.google.com/local/reviews?placeid=ChIJB-KtPZIZ2jERM1CXqUSnpc8" target='_blank'>Write a review</a>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <section id="testimonials">
                                        <div className="testimonial-box-container">
                                            {/* <ReviewCarousalView cols={2} rows={1} gap={10} loop /> */}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

