import React from 'react';

const Featured = () => {
    const slides = [
        { src: "/images/mediacrop.webp" },
        { src: "/images/apple-ios.webp" },
        { src: "/images/amazon.webp" },
        { src: "/images/google-play.webp" },
        { src: "/images/aca.webp" },
        { src: "/images/pic938Live.webp" },
        { src: "/images/pic123456.webp" },
        { src: "/images/berita-harian.webp" },
        { src: "/images/cna.webp" },
        { src: "/images/ezyhealth.webp" },
        { src: "/images/lifestyle.webp" },
        { src: "/images/medical-grapevine.webp" },
        { src: "/images/newicon.webp" },
        { src: "/images/shape-magazine.webp" },
        { src: "/images/straits-times.webp" },
        { src: "/images/tech-in-asia.webp" },
        { src: "/images/zaobao.webp" },
        { src: "/images/todays-parent.webp" }
    ];

    return (
        <div className="logo-slider" data-aos="fade-down">
            <div className="container">
                <h2>We Are Featured In</h2>
                <div className="slide-track">
                    {slides.map((slide, index) => (
                        <div className="slide" key={index}>
                            <img src={slide.src} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured
