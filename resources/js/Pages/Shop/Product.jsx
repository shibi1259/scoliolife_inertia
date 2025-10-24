import React, { useState, useEffect, Fragment } from "react";
import { Link } from "@inertiajs/react";
// import ReactPlayer from "react-player";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Banner from "@/Components/Banner";
import Sidebar from "@/Components/Sidebar";
import ImageSlider from "@/Components/Shop/ImageSlider";
import { getProduct } from "@/API/api";
import { useLaravelReactI18n } from "laravel-react-i18n";
import Buttons from "@/Components/Shop/Buttons";

const Product = ({ product = "Demo product", auth }) => {
  const [productDetail, setProductDetail] = useState(null);
  const { t, currentLocale } = useLaravelReactI18n();
  const lang = currentLocale();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProduct(product, lang, auth?.user)
      .then((data) => {
        if (data) setProductDetail(data);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [product, lang, auth?.user]);

  const handleMinusQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handlePlusQuantity = () => setQuantity((prev) => prev + 1);

  if (!productDetail)
    return (
      <AuthenticatedLayout>
        <Sidebar />
      </AuthenticatedLayout>
    );

  const hasAwsProducts = productDetail?.aws3_bucket_product?.length > 0;

  return (
    <AuthenticatedLayout>
      <Banner title={product} />

      <div className="product-section">
        <div className="container">
          <div className="row">  
              <ImageSlider productDetail={productDetail} />
            <div className="col-md-5">
              <div className="product-text">
                <h2>{productDetail?.title}</h2>

                <div className="rating-wishlist-div">
                  <div className="product-star">
                    <p className="star">★★★★★</p>
                    <p>({productDetail?.product_review?.length || 0} {t('product.customer_reviews')})</p>
                  </div>
                  <div className="wishlist-icon">
                    <img src="/assets/images/heart.png" alt="Wishlist" width="24" />
                  </div>
                </div>

                <div className="product-price-view">
                  <span className="price">${parseFloat(productDetail?.price).toFixed(2)}</span>
                </div>
                <span className="approx_format">Approx. SGD {(parseFloat(productDetail?.price) * 1.36).toFixed(2)}</span>

                <p dangerouslySetInnerHTML={{ __html: productDetail?.description }}></p>

                {productDetail?.product_type === "variable-product" && (
                  <div className="product-dropdown">
                    <label htmlFor="size">Select Size:</label>
                    <select id="size" name="size">
                      <option>Select size</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                )}

                <p style={{ color: "red" }}>Please select a size before adding to cart.</p>

                <p className="shown-price">${parseFloat(productDetail?.price).toFixed(2)} SGD</p>

                <div className="product-cart">
                  <span className="cart-minus" onClick={handleMinusQuantity}>
                    <HiMinus />
                  </span>
                  <h4>{quantity}</h4>
                  <span className="cart-plus" onClick={handlePlusQuantity}>
                    <BsPlusLg />
                  </span>
                </div>

                {/* <button className="btn btn-primary mt-3">Add to Cart</button>
                <button className="btn btn-secondary mt-2">Buy Now</button> */}
              <Buttons 
              
              key={productDetail?.id}
                      id={productDetail?.id}
                     
                      price={productDetail?.price}
                      slug={productDetail?.slug}
                     
                      // onCartClick={handleAddToCart}
                      // onBuyNowClick={onBuyNowClick}
                      // consultationSize={consultationSize}
              
              
              />
                <p className="sku">SKU: {productDetail?.product_sku}</p>
                <span className="Category-product">
                  {t('product.category')} :
                  <Link href={`/product-category/${productDetail?.cat_info?.slug}`}>
                    {productDetail?.cat_info?.title}
                  </Link>
                </span>

                {productDetail.amazon_link && (
                  <div>
                    <Link href={productDetail.amazon_link}>
                      <img src={productDetail.amazon_image_link} alt="amazon" width="100" />
                    </Link>
                  </div>
                )}

                <div className="social-links">
                  <a href="https://www.facebook.com/scoliolife/" target="_blank" rel="noreferrer">
                    <img src="/assets/images/fb.png" alt="Follow us on facebook" width="26" height="26" />
                  </a>
                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fscoliolife" target="_blank" rel="noreferrer">
                    <img src="/assets/images/tweet.png" alt="Follow us on X" width="26" height="26" />
                  </a>
                  <a href="https://sg.linkedin.com/in/DrKevinLau" target="_blank" rel="noreferrer">
                    <img src="/assets/images/linkedin.png" alt="Follow us on Linkedin" width="26" height="26" />
                  </a>
                  <a href="https://drkevinlau.blogspot.com/" target="_blank" rel="noreferrer">
                    <img src="/assets/images/blog.png" alt="Follow us on Blogspot" width="26" height="26" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AWS Product Section */}
      {hasAwsProducts && (
        <div className="tabs-product">
          <div className="tab-content">
            <div className="product-video-section">
              {productDetail?.featured_video_url ? (
                // <ReactPlayer url={productDetail.featured_video_url} controls />
                <video src={productDetail.featured_video_url}></video>
              ) : (
                <img src={productDetail?.photo} alt="Product Video" />
              )}
            </div>
            {/* Add your AWS product table and other logic here */}
          </div>
        </div>
      )}

      {/* Sidebar */}
      {!hasAwsProducts && <Sidebar />}
    </AuthenticatedLayout>
  );
};

export default Product;
