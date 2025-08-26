import React, { useState } from 'react';
import { usePage, router } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const LangSwitcher = ({ languages }) => {
    const { locale } = usePage().props;
    const { setLocale, loading } = useLaravelReactI18n();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (selectedLang) => {
        const selectedLocale = selectedLang.code;
        const currentPath = window.location.pathname;
        const pathWithoutLocale = currentPath.replace(/^\/([a-z]{2}_[A-Z]{2})/, '');

        const newPath = selectedLocale === 'en_US'
            ? `${pathWithoutLocale || '/'}`
            : `/${selectedLocale}${pathWithoutLocale}`;

        setIsOpen(false);
        setLocale(selectedLocale);
        router.visit(newPath, { preserveState: true });
    };

    const selectedLanguage = languages.find((lang) => lang.code === locale) || {
        name: 'US',
        icon: '/flags/us.png'
    };

    return (
        <>
            {loading && (
                <div className="language_spinner">
                    <div className="spinner-border text-warning language_spinner" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <span className="empty_layer"></span>
                </div>
            )}

            <div className="lang-switcher-wrapper">
                <div className="selected-lang-item" onClick={toggleDropdown}>
                    <img
                        src={selectedLanguage.icon}
                        alt={selectedLanguage.name}
                    />
                    <span>{selectedLanguage.name}</span>
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {isOpen && languages?.length > 0 && (
                    <ul className="lang-main">
                        {languages.map((lang) => (
                            <li key={lang.id} className="non-treatments">
                                <div
                                    className="lang-item justify-content-center align-items-center"
                                    onClick={() => handleChange(lang)}
                                >
                                    <img
                                        src={lang.icon}
                                        alt={lang.name}
                                        width={24}
                                        height={24}
                                        style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                                    />
                                    <span>{lang.name}</span>
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
