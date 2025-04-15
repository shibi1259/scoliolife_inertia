
import React from 'react';

const Newslatter = () => {

    return (
        <div className="newsletter-section" data-aos="zoom-in" >
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="newsletter-box-wrapper" >
                            <p>Subscribe to our ScolioLife newsletter to receive the latest scoliosis research and articles, and get a 15% discount code for any product in our online store.</p>
                            <form>
                                <input type="email" maxLength="50" required placeholder={'your email here ...'} />
                                <button type='submit' className="bt">SubscribeF</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="newsletter-logo-wrapper">
                            <img src="assets/images/ScolioLife-Logo.webp" alt='scoliolife-logo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newslatter
