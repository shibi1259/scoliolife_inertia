import React, { useState, useEffect } from "react";
import Sidebar from "@/Components/Sidebar";
import { useForm } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { getLocaleForRoute, routeWithLocale } from "@/Utils/localeHelper";
import { Rating } from '@smastrom/react-rating'

const Description = ({ productDetail, auth }) => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [summaryText, setSummaryText] = useState("");
    const { t } = useLaravelReactI18n();
    const lang = useLaravelReactI18n().currentLocale();
    const currentLang = getLocaleForRoute(lang);

    const { data, setData, post, processing, errors, reset } = useForm({
        review: "",
        rate: 1,
        user_name: auth?.name || "",
        email_address: auth?.email || "",
    });

    useEffect(() => {
        if (productDetail?.summary) {
            setSummaryText(productDetail.summary);
        }
    }, [productDetail]);

    useEffect(() => {
        if (activeTab === "tab3") {
            setData({
                comment: "",
                rate: 1,
                user_name: auth?.name || "",
                email_address: auth?.email || "",
            });
        }
    }, [activeTab, auth]);

    const handleTabClick = (tab) => setActiveTab(tab);

    const onSubmitReview = (e) => {
        e.preventDefault();

        // Submit using Inertia's post method
        post(routeWithLocale('reviews.store', currentLang, { review: productDetail?.id }), {
            onSuccess: () => {
                // Reset form on successful submission
                reset();
            },
            onError: (errors) => {
                // Errors are automatically handled by Inertia
                console.log('Validation errors:', errors);
            },
        });
    };

    const attributes =
        productDetail?.attributes && JSON.parse(productDetail.attributes);

    return (
        <div className="container">
            <Sidebar />

            <div className="tabs-product">
                <div className="tab-bg">
                    <div className="tab-buttons">
                        <button
                            onClick={() => handleTabClick("tab1")}
                            className={activeTab === "tab1" ? "active" : ""}
                        >
                            {t("single_product_tabs")['description_tabs']}
                        </button>
                        <button
                            onClick={() => handleTabClick("tab2")}
                            className={activeTab === "tab2" ? "active" : ""}
                        >
                            {t("single_product_tabs")['additional_info_tabs']}
                        </button>
                        <button
                            onClick={() => handleTabClick("tab3")}
                            className={activeTab === "tab3" ? "active" : ""}
                        >
                            {t("single_product_tabs")['ratings_tabs']}
                        </button>
                    </div>
                </div>

                <div className="tab-content">
                    {/* ===== Tab 1: Description ===== */}
                    {activeTab === "tab1" && (
                        <div className="prod-first-tab">
                            {summaryText.includes("[contact-form-7]") ? (
                                <p dangerouslySetInnerHTML={{ __html: summaryText }}></p>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: summaryText }}></p>
                            )}
                        </div>
                    )}

                    {/* ===== Tab 2: Additional Info ===== */}
                    {activeTab === "tab2" && (
                        <div>
                            <h2>{t("product")['information']}</h2>
                            <table className="table">
                                <tbody>
                                    {productDetail?.product_actual_weight && (
                                        <tr>
                                            <th>{t("product")['weights']}</th>
                                            <td>{productDetail.product_actual_weight} g</td>
                                        </tr>
                                    )}

                                    {(productDetail?.dimension_length ||
                                        productDetail?.dimension_height ||
                                        productDetail?.dimension_weight) && (
                                            <tr>
                                                <th>{t("product")['dimensions']}</th>
                                                <td>
                                                    {[productDetail.dimension_length,
                                                    productDetail.dimension_weight,
                                                    productDetail.dimension_height]
                                                        .filter(Boolean)
                                                        .join(" × ")}{" "}
                                                    cm
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* ===== Tab 3: Reviews ===== */}
                    {activeTab === "tab3" && (
                        <div className="rating-section">
                            <div id="comments">
                                <h2 className="woocommerce-Reviews-title">
                                    {productDetail?.product_review?.length || 0}{" "}
                                    {t("product")['reviews']}{" "}
                                    <span>{productDetail?.title || ""}</span>
                                </h2>

                                {productDetail?.product_review?.map((item) => (
                                    <ol className="commentlist" key={item.id}>
                                        <li className="review even thread-even depth-1">
                                            <div className="comment_container">
                                                <img
                                                    src="https://scoliolife.com/uploads/2021/02/Scoliosis-Book.png"
                                                    alt="User avatar"
                                                    className="avatar avatar-60 photo"
                                                    width="60"
                                                    height="60"
                                                />
                                                <p className="meta">
                                                    <strong className="woocommerce-review__author">
                                                        {item.user_name}
                                                    </strong>
                                                </p>
                                                <div className="star_design">
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label={`Rated ${item.rate} out of 5`}
                                                    >
                                                        {item.rate}
                                                    </div>
                                                    <span className="woocommerce-review__dash"></span>
                                                    <time className="woocommerce-review__published-date">
                                                        {item.created_at}
                                                    </time>
                                                </div>
                                                {item.review && item.review !== "null" && (
                                                    <div className="description">
                                                        <p>{item.review}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    </ol>
                                ))}
                            </div>

                            {/* Review Form */}
                            <div id="review_form_wrapper">
                                <div id="review_form">
                                    <div id="respond" className="comment-respond">
                                        <span id="reply-title" className="comment-reply-title">
                                            {t("product")['add_a_review']}
                                        </span>

                                        <form onSubmit={onSubmitReview}>
                                            <p>{t("product")['marked_message']} *</p>

                                            <p className="comment-form-comment">
                                                <label>
                                                    {t("product")['your_ratting']}{" "}
                                                    <span className="required">*</span>
                                                </label>

                                                <Rating
                                                    count={5}
                                                    onChange={(rate) => setData('rate', rate)}
                                                    // onBlur={onBlur}
                                                    style={{ maxWidth: 100 }}
                                                    halfFillMode="svg"
                                                    className="star-product"
                                                    value={data.rate ? data.rate : 0}
                                                />
                                                {errors.rate && (
                                                    <p className="validations">{errors.rate}</p>
                                                )}
                                            </p>

                                            <p className="comment-form-comment">
                                                <label htmlFor="comment">
                                                    {t("product")['your_review']}{" "}
                                                    <span className="required">*</span>
                                                </label>
                                                <textarea
                                                    value={data.review}
                                                    onChange={(e) => setData('comment', e.target.value)}
                                                    cols="45"
                                                    rows="8"
                                                    id="comment"
                                                    name="comment"
                                                ></textarea>
                                                {errors.comment && (
                                                    <p className="validations">{errors.comment}</p>
                                                )}
                                            </p>

                                            <p className="comment-form-author">
                                                <label htmlFor="author">
                                                    {t("product")['name']}
                                                    <span className="required">*</span>
                                                </label>
                                                <input
                                                    id="author"
                                                    value={data.user_name}
                                                    onChange={(e) => setData('user_name', e.target.value)}
                                                    type="text"
                                                />
                                                {errors.user_name && (
                                                    <p className="validations">{errors.user_name}</p>
                                                )}
                                            </p>

                                            <p className="comment-form-email">
                                                <label htmlFor="email">
                                                    {t("product")['email']}
                                                    <span className="required">*</span>
                                                </label>
                                                <input
                                                    value={data.email_address}
                                                    onChange={(e) => setData('email_address', e.target.value)}
                                                    type="email"
                                                    id="email"
                                                />
                                                {errors.email_address && (
                                                    <p className="validations">{errors.email_address}</p>
                                                )}
                                            </p>

                                            <p className="comment-form-cookies-consent">
                                                <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" value="yes" type="checkbox" />
                                                <label for="wp-comment-cookies-consent">{t("product")['website_comment']}</label>
                                            </p>

                                            <button
                                                type="submit"
                                                className="submit-form" id="submit"
                                                disabled={processing}
                                            >
                                                <span>{t("passwords")['forgot']['submit']}</span>
                                                {processing && (
                                                    <div className="btn-loader">
                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/512/8146/8146974.png"
                                                            alt="loader-button"
                                                            width="20"
                                                        />
                                                    </div>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Description;