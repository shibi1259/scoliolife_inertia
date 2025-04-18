import React, { useEffect, useState } from 'react';
import { usePage, router } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { getLanguages } from '@/API/api';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const LangSwitcher = () => {
    const { locale } = usePage().props;
    const { t, tChoice, currentLocale, setLocale, getLocales, isLocale, loading } = useLaravelReactI18n();
    const currentPath = window.location.pathname;
    const [isHovered, setIsHovered] = useState(false);
    const [data, setData] = useState([]);
    const mobileScreen = 768;

    const handleChange = (selectedData) => {
        const selectedLocale = selectedData.code;
        const pathWithoutLocale = currentPath.replace(/^\/([a-z]{2}_[A-Z]{2})/, '');
    
        const newPath = selectedLocale === 'en_US'
            ? `${pathWithoutLocale || '/'}`
            : `/${selectedLocale}${pathWithoutLocale}`;
    
        router.visit(newPath, {
            preserveState: true,
        });
    
        setLocale(selectedLocale); // ← use full locale code directly
    };
    
    

    const handleMouseEnter = () => {
        if (window.innerWidth >= mobileScreen) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= mobileScreen) {
            setIsHovered(false);
        }
    };

    useEffect(() => {
        getLanguages()
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                console.error('Error fetching languages:', error);
            });
    }, []);

    const checkTrigger = () => {
        setIsHovered(!isHovered);
    };

    const selectedLanguage = data.find((lang) => lang.code === locale) || {
        name: 'English',
        icon: '/homeLogo/Award-1-EN.webp'
    };

    return (
        <>
            {loading && (
                <div className="language_spinner">
                    <div
                        className="spinner-border text-warning language_spinner"
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                    <span className="empty_layer"></span>
                </div>
            )}

            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="selected-lang-item" onClick={checkTrigger}>
                    <img
                        src={selectedLanguage.icon}
                        alt={selectedLanguage.name}
                    />
                    <span>{selectedLanguage.name}</span>
                    {isHovered ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isHovered && data && (
                    <ul className="lang-main">
                        {data.map((userData) => (
                            <li key={userData.id} className="non-treatments">
                                <div
                                    className="lang-item"
                                    onClick={() => handleChange(userData)}
                                >
                                    <img
                                        src={userData.icon}
                                        alt={userData.name}
                                    />
                                    <span>{userData.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default LangSwitcher;
