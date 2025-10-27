import { useLaravelReactI18n } from "laravel-react-i18n";
import React, { useEffect, useState } from "react";

const CurrencyConverter = ({ price }) => {
    const { currentLocale } = useLaravelReactI18n();
    const lang = currentLocale() || "en_US";

    const [exchangeRates, setExchangeRates] = useState({});
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [loading, setLoading] = useState(true);

    const BASE_CURRENCY = "SGD";

    const languageCurrencyMap = {
        en_US: { code: "USD", symbol: "$" },
        en_UK: { code: "GBP", symbol: "£" },
        en_AU: { code: "AUD", symbol: "A$" },
        en_CA: { code: "CAD", symbol: "C$" },
        en_NZ: { code: "NZD", symbol: "NZ$" },
        en_SG: { code: "SGD", symbol: "S$" },
        en_IN: { code: "INR", symbol: "₹" },
        en_MY: { code: "MYR", symbol: "RM" },
        es_ES: { code: "EUR", symbol: "€" },
        es_MX: { code: "MXN", symbol: "MX$" },
        fr_FR: { code: "EUR", symbol: "€" },
        de_DE: { code: "EUR", symbol: "€" },
        it_IT: { code: "EUR", symbol: "€" },
        ja_JP: { code: "JPY", symbol: "¥" },
        zh_CN: { code: "CNY", symbol: "¥" },
        zh_HK: { code: "HKD", symbol: "HK$" },
        id_ID: { code: "IDR", symbol: "Rp" },
    };

    const getCurrencyInfo = (locale) => locale === 'en_SG' ? languageCurrencyMap["en_US"] : languageCurrencyMap[locale] || { code: "USD", symbol: "$" };
    const { code: targetCode, symbol: targetSymbol } = getCurrencyInfo(lang);

    // Fetch live exchange rates
    useEffect(() => {
        const fetchRates = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://open.er-api.com/v6/latest/${BASE_CURRENCY}`);
                const data = await res.json();
                setExchangeRates(data.rates || {});
            } catch (err) {
                console.error("Exchange rate fetch failed:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, []);

    // Convert base price to target currency
    useEffect(() => {
        if (!price || !exchangeRates[targetCode]) return;

        const rate = exchangeRates[targetCode];
        const convert = (val) => (parseFloat(val) * rate).toFixed(2);

        if (price.includes("-")) {
            const [min, max] = price.split("-").map((v) => v.trim());
            setConvertedAmount(`${convert(min)} - ${convert(max)}`);
        } else {
            setConvertedAmount(convert(price));
        }
    }, [price, exchangeRates, targetCode]);

    return (
        <p className="approx-price text-sm text-gray-600 italic">
            {loading
                ? "Loading exchange rate..."
                : convertedAmount
                    ? `(Approx. ${targetSymbol}${convertedAmount} ${targetCode})`
                    : "(Unavailable)"}
        </p>
    );
};

export default CurrencyConverter;
