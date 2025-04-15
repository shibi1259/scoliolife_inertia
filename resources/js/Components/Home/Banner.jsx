import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

export default function Banner() {

    const getImageData = (language) => {
        switch (language) {
            case 'en_SG':
                return {
                    Award1: '/homeLogo/Award-1-EN.webp',
                    Awrad2: '/homeLogo/Award-2-EN.webp'           
                };
            case 'es_ES':
                return {
                    Award1: '/homeLogo/Award-1-ES.webp',
                    Awrad2: '/homeLogo/Award-2-ES.webp'             

                };
            case 'fr_FR':
                return {
                    Award1: '/homeLogo/Award-1-ES.webp',
                    Awrad2: '/homeLogo/Award-2-FR.webp'     
                     };
            case 'id_ID':
                return {
                    Award1: '/homeLogo/Award-1-ID.webp',
                    Awrad2: '/homeLogo/Award-2-ID.webp'         
                };
            case ' it_IT':
                return {
                    Award1: '/homeLogo/Award-1-IT.webp',
                    Awrad2: '/homeLogo/Award-2-IT.webp'  
                        };
            case 'es_MX':
                return {
                    Award1: '/homeLogo/Award-1-ES.webp',
                    Awrad2: '/homeLogo/Award-2-ES.webp'    
                      };
            case 'zh_CN':
                return {
                    Award1: '/homeLogo/Award-1-CS.webp',
                    Awrad2: '/homeLogo/Award-2-CS.webp'      
                   };
            case 'zh_HK':
                return {
                    Award1: '/homeLogo/Award-1-CT.webp',
                    Awrad2: '/homeLogo/Award-2-CT.webp'    
                      };
            case 'ja_JP':
                return {
                    Award1: '/homeLogo/Award-1-JP.webp',
                   Awrad2: '/homeLogo/Award-2-JP.webp'  
                       };
            default:
                return {
                    Award1: '/homeLogo/Award-1-EN.webp',
                   Awrad2: '/homeLogo/Award-2-EN.webp'  
                       };
        }
    };

   
    // Retrieve image URL and Awrad2ageData function
    // const { Award1, Awrad2} = getImageData(currentLanguage);

    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" data-aos="fade-right">
                            <div className="banner-logo">
                                <img src={'/homeLogo/Award-1-EN.webp'} alt={'/homeLogo/Award-1-EN.webp'} />
                                <img src={'/homeLogo/Award-2-EN.webp'} alt={'/homeLogo/Award-2-EN.webp'} />
                            </div>
                            <div className="banner-left-discription">
                                {/* <h4>{t('banner.straightenSpine')}</h4> */}
                                <h4>Straighten Your Spine Without Surgery</h4>
                                {/* <h1 dangerouslySetInnerHTML={{__html: currentLanguage == 'en_MY' ? t('banner.sayGoodbyeMY') : t('banner.sayGoodbye')}} /> */}
                                <h1>

                                Embrace a Life Free from Scoliosis: Experience the Innovation of Our Award-Winning Clinic's
                                Non-Invasive Solutions.

                                </h1>
                                <Link href="/treatments/scoliosis" className="banner-btn">Treat Your Scoliosis Today</Link>
                            </div>
                        </div>
                        <div className="col-sm-6" data-aos="fade-left">
                            <div className="banner-right-image">
                                <img src={'/images/Scoliosis-Treatment-topbanner.png'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
