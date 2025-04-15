import React from 'react';

const Special = () => {
    return (
        <>
            <div className="special-offer" style={{ backgroundImage: `url(/images/knee.webp)` }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="special-offer-image">
                                <img src="/specialOfferImages/NewPatientOfferEN.png" alt="Special Offer" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="special-offer-box" data-aos="fade-right">
                                <h2>Special Offer</h2>
                                <ul>
                                    <li><div>Special offer description</div></li>
                                </ul>
                            </div>
                            <div className="counter" data-aos="fade-left">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="content">
                                            <div className="counter-box">
                                                <div className="counter-icon-box">
                                                    <img src="/Scoliosis Treated/Treated.webp" alt='Treated.webp' />
                                                </div>
                                                <div className="counter-dis-box">
                                                    <div className="value">2034</div>
                                                    <p>Treated</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="content">
                                            <div className="counter-box">
                                                <div className="counter-icon-box">
                                                    <img src="/Scoliosis Treated/Braced.webp" alt='Braced.webp' />
                                                </div>
                                                <div className="counter-dis-box">
                                                    <div className="value">1403</div>
                                                    <p>Braced</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row counter-row-2 mt-5">
                                    <div className="col-sm-6">
                                        <div className="content">
                                            <div className="counter-box">
                                                <div className="counter-icon-box">
                                                    <img src="/Scoliosis Treated/Worldwide.webp" alt='Worldwide.webp' />
                                                </div>
                                                <div className="counter-dis-box">
                                                    <div className="value">874</div>
                                                    <p>Overseas Treated</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="content">
                                            <div className="counter-box counter-box45">
                                                <div className="counter-icon-box">
                                                    <img src="/Scoliosis Treated/Products.webp" alt='Products.webp' />
                                                </div>
                                                <div className="counter-dis-box">
                                                    <div className="value">5623</div>
                                                    <p>Products Sold</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Special;


