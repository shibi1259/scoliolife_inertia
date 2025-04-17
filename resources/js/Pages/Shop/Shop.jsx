import React, { useEffect, useState } from "react";
import Banner from "@/Components/Banner";
import { BsHeart, BsStar } from 'react-icons/bs';
import { Link } from "@inertiajs/react";
import Sidebar from "@/Components/Shop/Sidebar";
import { getProducts } from "@/API/api";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useLaravelReactI18n } from "laravel-react-i18n";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState("Sort By Order");
    const { t, tChoice, currentLocale, setLocale, getLocales, isLocale } = useLaravelReactI18n();
    const currentLanguage = currentLocale();

    const fetchProducts = async (lang) => {
        try {
            const data = await getProducts(lang);
            setProducts(data);
            setSortedProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const languageMap = {
            en: 'en_US',
            fr: 'fr_FR',
            de: 'de_DE',
            es: 'es_ES',
            id: 'id_ID',
            it: 'it_IT',
            zh: 'zh_CN',
            ja: 'ja_JP',
        }
        const selectedLocale = languageMap[currentLanguage];
        fetchProducts(selectedLocale);
    }, [currentLanguage]);

    const handleSort = (option) => {
        let sorted = [...products];

        switch (option) {
            case "Sort by price: low to high":
                sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                break;
            case "Sort by price: high to low":
                sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                break;
            case "Sort by latest":
                sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                break;
            default:
                sorted = [...products];
        }

        setSortOption(option);
        setSortedProducts(sorted);
    };

    return (
        <AuthenticatedLayout>
            <Banner title="Shop" />
            <div className="container">
                <Sidebar />
                <div className="shop-section">
                    <div className="row">
                        <div className="Sort-By-Categories">
                            <select
                                className="select-age"
                                value={sortOption}
                                onChange={(e) => handleSort(e.target.value)}
                            >
                                <option value="Sort By Order">Sort By Order</option>
                                <option value="Sort by latest">Sort by latest</option>
                                <option value="Sort by price: low to high">Sort by price: low to high</option>
                                <option value="Sort by price: high to low">Sort by price: high to low</option>
                            </select>
                            <p className="shotting-result">
                                Showing {sortedProducts.length} result{sortedProducts.length !== 1 && "s"}
                            </p>
                        </div>

                        {loading ? (
                            <div className="text-center w-100">
                                <h4>Loading products...</h4>
                            </div>
                        ) : (
                            sortedProducts.map((product) => (
                                <div className="col-sm-4" key={product.id}>
                                    <div className="shop-treatments">
                                        <BsHeart />
                                        <Link href={route('shop.product', { product: product.slug, locale: currentLanguage })} className="shop-link">
                                            <img src={product.photo} alt={product.title} />
                                            <h3>{product.title}</h3>

                                            <div>
                                                <div className="price-shop">
                                                    <p className="price">
                                                        $ {product.price} SGD
                                                    </p>
                                                    <p className="star">
                                                        <BsStar />
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="home__container">
                                            <div className="home__row">
                                                <div>
                                                    <div className="shop-pg cart-buttons">
                                                        <button className="btn btn-primary">
                                                            Add to Cart
                                                        </button>
                                                        <button className="btn btn-primary buy-btn">
                                                            Buy Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Shop;
