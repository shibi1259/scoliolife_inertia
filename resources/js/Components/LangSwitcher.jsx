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

    const languageMap = {
        en_US: 'en',
        en_SG: 'en',
        en_AU: 'en',
        en_UK: 'en',
        en_CA: 'en',
        en_IN: 'en',
        en_MY: 'en',   
        en_NZ: 'en',
        fr_FR: 'fr',
        de_DE: 'de',
        es_ES: 'es',
        id_ID: 'id',
        it_IT: 'it',
        es_MX: 'es',
        zh_CN: 'zh',
        zh_HK: 'zh',
        ja_JP: 'ja',
    }
    
    const handleChange = (data) => {
        // const selectedLocale = e.target.value;
        const selectedLocale = languageMap[data.code];
        // debugger
        // Replace current locale in URL
        const pathWithoutLocale = currentPath.replace(/^\/(en|fr|de|es|id|it|zh|ja)/, '');
        router.visit(`/${selectedLocale}${pathWithoutLocale}`, {
            preserveState: true,
        });

        setLocale(selectedLocale);
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
        // if(isHovered) {
        setIsHovered(!isHovered);
        // }
    };
    const selectedLanguage = data.find((lang) => lang.code === locale) || {
        name: 'English', icon: '/homeLogo/Award-1-EN.webp'
    };
    return (
        // <select value={locale} onChange={handleChange}>
        //     <option value="en">English</option>
        //     <option value="fr">Français</option>
        //     <option value="de">Deutsch</option>
        // </select>

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
