import React from 'react';
import { Link } from '@inertiajs/react';

const Footer = () => {
  const footerData = [
    { lable: 'About Us', href: '/about-us' },
    { lable: 'Services', href: '/services' },
    { lable: 'Contact', href: '/contact' },
    { lable: 'FAQ', href: '/faq' },
    { lable: 'Shop', href: '/shop' },
  ]

  const contactInfo = [
    { icon: '/custom_images/widgets/footer-location.webp', text: '123 Main Street, City, Country', title: 'CONTACT INFO' }, ,
    { icon: '/custom_images/widgets/footer-call.png', text: '+1 234 567 890', title: 'TELEPHONE' },
    { icon: '/custom_images/widgets/footer-time.png', text: 'Mon - Fri: 9am - 6pm', title: 'OPENING HOURS' },
  ]
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <div className="footer_menu">
                  {footerData.map((foot, index) => {
                    return (
                      <li className="url-footer" key={index}>
                        <img src="/assets/images/right-arrow.webp" alt="right-arrow" />
                        <a className="nav-link1" href={foot.href}>
                          {foot.lable}
                        </a>
                      </li>
                    )
                  })}
                </div>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-sm-3">

            {contactInfo.map((contact, index) => {
              return (
                <div className={`row ${index === 0 ? 'info' : 'mt-4'}`} key={index}>
                  <div className="col-sm-12">
                    <div className="contact-info">
                      <h3>{contact.title}</h3>
                      <div className="location-discription time-discription">
                        <img src={contact.icon} alt='item-photo' />
                        <p>{contact.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )})}
          </div>

          {/* Facebook Widget */}
          {/* <div className="col-sm-4">
            <div className="facebook-dis">
              <h3>Like Us on Facebook</h3>
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
                src={`https://www.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df318a4edf11138%26domain%3Dscoliolife.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fscoliolife.com%252Ffb1839846f28e4%26relation%3Dparent.parent&container_width=400&height=380&hide_cover=true&href=https://www.facebook.com/scoliolife&locale=en_GB&sdk=joey&show_facepile=false&small_header=true&tabs=timeline&width=500`}
                style={{ border: "none", visibility: "visible", width: "400px", height: "380px" }}
                className=""
              ></iframe>
            </div>
          </div> */}
        </div>
        <hr className="border-secondary my-4" />
        <p className="text-center text-muted mb-0">© 2025 Scoliolife. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
