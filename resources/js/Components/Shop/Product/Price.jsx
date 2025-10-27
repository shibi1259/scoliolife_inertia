import React from 'react'

const Price = ({ price, currency = 'SGD' }) => {
    if (!price) return <p className="lead">–</p>;

    const format = (val) => `$${parseFloat(val).toFixed(2)} ${currency}`;
    const displayPrice = price.includes("-") ? price.split("-").map((v) => format(v.trim())).join(" – ") : format(price);

    return <p className="lead">{displayPrice}</p>;
};
export default Price