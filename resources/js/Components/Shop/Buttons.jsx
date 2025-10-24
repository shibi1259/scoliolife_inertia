import { useLaravelReactI18n } from 'laravel-react-i18n';
import React, { useEffect, useState } from 'react';
import { Link } from "@inertiajs/react";
import { getLocaleForRoute } from '@/Utils/localeHelper';


const Buttons = ({
    id, slug, price, consultationSize,
    onCartClick, onBuyNowClick
}) => {
    // const { cart } = useSelector(state => state.cart);
    const { t, currentLocale } = useLaravelReactI18n();
    const currentLanguage = currentLocale();
    const urlLanguage = getLocaleForRoute(currentLanguage)
    const [buttonUrl, setButtonUrl] = useState('https://calendar.app.google/7VnE6mQMV3kp5rSs7');

    // Persist cart in localStorage
    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cart));
    // }, [cart]);

    // Determine consultation URL
    useEffect(() => {
        if (!consultationSize) return;

        const followUpSizes = [
            'Follow Up Teleconsultation (Zoom or Meet)',
            'Folge-Telekonsultation (Zoom oder Meet)',
            'Téléconsultation de suivi (Zoom ou Meet)',
            'Teleconsulta de seguimiento (Zoom o Meet)',
            'Teleconsulenza di follow-up (Zoom o Meet)',
            'Konsultasi Daring Lanjutan (Zoom atau Meet)',
            '跟进远程咨询（Zoom或Meet）',
            '跟進遠程諮詢（Zoom或Meet）'
        ];

        let url = followUpSizes.includes(consultationSize)
            ? 'https://calendar.app.google/zMXutDLCVH4Yb1Tp8'
            : 'https://calendar.app.google/7VnE6mQMV3kp5rSs7';

        if (currentLanguage === 'en_MY') {
            url = 'https://calendar.google.com/calendar/u/0/appointments/AcZssZ2TqAIY5UIPxzP-EDaEkKISdkTf2qniUQmsIQw=';
        }

        setButtonUrl(url);
    }, [consultationSize, currentLanguage]);

    // Render button based on product type
    if (price && price > 0) {
        if (slug === 'skype-zoom-consultation' || id === '74') {
            return (
                <Link className="btn btn-primary" to={buttonUrl} target="_blank">
                    {t('top-header')['Book Consultation']}
                </Link>
            );
        }

        return (
            <div className="product-pg cart-buttons">
                <button className="btn btn-primary" onClick={onCartClick}>
                    {t("product_dropdown")["add_to_cart"]}
                </button>
                <button className="btn btn-primary buy-btn" onClick={onBuyNowClick}>
                    {t("product_dropdown")["buy_now"]}
                </button>
            </div>
        );
    }

    return (
        <Link className="btn btn-primary" to={`${urlLanguage}/contact-us`}>
            {t("product_dropdown")["contact_us"]}
        </Link>
    );
};

export default Buttons;
