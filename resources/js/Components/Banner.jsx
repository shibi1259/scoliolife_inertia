import React from "react";

const Banner = ({ title = "", pageClass = "" }) => {
    const img = `/assets/images/banner_new.webp`;

    return (
        <>
            <div
                className={`inner-banner ${pageClass}`}
                style={{ backgroundImage: `url(${img})` }}
            >
                {/* <MetaCreator title={title} /> */}
                <h1>{title}</h1>
            </div>
        </>
    );
};

export default Banner;
