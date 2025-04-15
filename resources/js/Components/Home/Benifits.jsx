import React from 'react'

const Benifits = () => {
    const benefitsData = [
        {
            id: 1,
            image: "https://stage.scoliolife.com/uploads/2023/03/spinal-cord-1.png",
            title: "Benefit 1",
            description: "Benefit 1 description"
        },
        {
            id: 2,
            image: "https://stage.scoliolife.com/uploads/2023/03/Pain-Relief.webp",
            title: "Benefit 2",
            description: "Benefit 2 description"
        },
        {
            id: 3,
            image: "https://stage.scoliolife.com/uploads/2023/09/3736120-1.png",
            title: "Benefit 3",
            description: "Benefit 3 description"
        },
        {
            id: 4,
            image: "https://stage.scoliolife.com/uploads/2023/09/image-2.png",
            title: "Benefit 4",
            description: "Benefit 4 description"
        }
    ];

    return (
        <>
            <div className="banifits-section">
                <div className="container">
                    <h2 data-aos="fade-down">The benefits of the world-class scoliosis treatment at ScolioLife™Clinic include</h2>

                    <div className="row">
                        {benefitsData.map((benefit) => (
                            <div className="col-sm-3" data-aos="slide-up" key={benefit.id}>
                                <div className="benifits-box-wrapper">
                                    <div className="counting-box">
                                        <p>{benefit.id}</p>
                                    </div>
                                    <div className="benifits-icon-box">
                                        <div className="benifits-icon">
                                            <img src={benefit.image} alt={`benefit${benefit.id}`} loading="lazy" />
                                        </div>
                                        <h3>{benefit.title}</h3>
                                        <div>{benefit.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benifits;


