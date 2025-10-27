import { addToWishlist, API } from '@/API/api';
import { useForm, usePage } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react'
import { toast } from 'react-toastify';

const WishListButton = ({ product = null, extraClass = 'shop-wishlist' }) => {
    const { t, currentLocale } = useLaravelReactI18n();
    const { props } = usePage();
    const lang = currentLocale();
    const auth = props.auth;
    const { post, processing } = useForm({
        user_id: auth?.user?.id || null,
        product_id: product?.id,
        language: lang,
    });

    const handleWishlistClick = async (e) => {
        e.preventDefault();
        if (!auth || !auth.user) {
            toast.error(t("product_dropdown")['wishlist']['unauth']);
            return;
        }

        const element = e.currentTarget;
        const data = {
            user_id: auth.user.id,
            product_id: product.id,
            language: lang,
        };

        try {
            const response = await addToWishlist(data);
            if (response) {
                response.type === "add" ? element.classList.add("active") : element.classList.remove("active");
                toast.success(response?.message);
            }
        } catch (error) {
            toast.error(error?.response?.data.message);
        }

    }

    return (
        <>
            <span
                className={`${extraClass} wishlist-icon${(product.wishlist && product.wishlist.id) ? ' active' : ''}`}
                onClick={handleWishlistClick}
                title={`${(product.wishlist && product.wishlist.id) ? 'Remove from' : 'Add to'} wishlist`}
            >
                <img src={"/images/icons/heart.svg"} alt="wishlist-icon" />
            </span>
        </>
    )
}

export default WishListButton