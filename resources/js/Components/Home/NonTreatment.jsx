import React from "react";

const NonTreatment = () => {
    const nontreatmentData = [
        {
            photo: "https://sladmin.scoliolife.com/uploads/2023/03/treatment11.webp",
            title: "Wellness Consultation",
            description:
                "Initial consultation to understand your health goals and create a personalized wellness plan.",
        },
        {
            photo: "https://sladmin.scoliolife.com/uploads/2023/09/treatment3-1.webp",
            title: "Lifestyle Coaching",
            description:
                "One-on-one coaching sessions focused on nutrition, exercise, and stress management.",
        },
        {
            photo: "https://sladmin.scoliolife.com/uploads/2023/09/new-image.jpg",
            title: "Health Assessment",
            description:
                "Comprehensive health screening and assessment to identify areas for improvement.",
        },
    ];
    return (
        <>
            <div className="non-treatments" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        {nontreatmentData?.map((item, index) => (
                            <div className="col-sm-4" key={index}>
                                <div className="treatments-wrpper">
                                    <img
                                        src={item.photo}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <h3>{item.title}</h3>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.description,
                                        }}
                                    ></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NonTreatment;
