import React from 'react';
import { Link } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { getLocaleForRoute } from '@/Utils/localeHelper';
import FacebookPage from './FacebookPage';
import { formatWhatsAppNumber } from '@/Utils/Helper';

const Footer = ({ footer, contactDetails, widgets, disclaimer }) => {
  const { t, tChoice, currentLocale, setLocale, getLocales, isLocale, loading } = useLaravelReactI18n();
  const lang = currentLocale();
  const currentLang = getLocaleForRoute(lang);

  console.log("contactDetails", contactDetails);
  console.log("widgets", widgets);
  console.log("disclaimer", disclaimer);
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="quick-links">
              <h3>{t('bottom-footer')['quick_link']}</h3>
              <ul>
                {footer[0].items.map((foot) => (
                  foot.children.map((child) => {
                    return (
                      <li className="url-footer" key={child.id}>
                        <img src="/assets/images/right-arrow.webp" alt="right-arrow" />
                        <Link className="nav-link1" href={child.link}>
                          {child.label}
                        </Link>
                      </li>
                    )
                  })
                ))}
              </ul>
            </div>

            <div>
              {disclaimer?.map((dis, index) => (
                <div className="row mt-4 info" key={index}>
                  <div className="col-sm-12">
                    <div className="disclaimer-text">
                      <div className="location-discription time-discription">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: dis.description,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-sm-3">

            {widgets.map((widget, index) => {
              return (
                <div className={`row ${index === 0 ? 'info' : 'mt-4'}`} key={index}>
                  <div className="col-sm-12">
                    <div className="contact-info">
                      <h3>{widget.title}</h3>
                      <div className="location-discription time-discription">
                        <img src={`/${widget.image}`} alt='item-photo' style={{ width: '40px' }} />
                        {widget.type === 'whatsapp' ? <p> <a target="_blank" href={`https://api.whatsapp.com/send/?phone=${formatWhatsAppNumber(widget.description)}&text=Hello%21%0A%0A%2AFOR+NEW+PATIENT%2A%0AName%3A%0ARelation+%28if+inquirer+is+not+patient%29%3A%0A%0A%2AENQUIRY%3A%2A%0A&type=phone_number&app_absent=0`}> {widget.description} </a> </p> : <p>{widget.description}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Facebook Widget */}
          <div className="col-sm-4">
            <div className="facebook-dis">
              <h3>{t('footer-section')['facebook']}</h3>
              <FacebookPage currentLanguage={lang} />
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="text-center mb-0 text-light">© {new Date().getFullYear()} Scoliolife. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
