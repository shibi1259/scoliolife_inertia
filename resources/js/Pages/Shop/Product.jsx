import React, { useState, Fragment } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Banner from "@/Components/Banner";
/* Sidebar is unused in this example, kept commented out for reference */
// import Sidebar from '@/Components/Sidebar';

/*
  Stubs for components used in the JSX so this file can run standalone
  in a demo/dev environment. Replace these with real imports in production.
*/
const Link = ({ to, children }) => <a href={to}>{children}</a>;
const ImageSlider = ({ productDetail }) => (
  <div className="col-md-7">ImageSlider ({productDetail?.title})</div>
);
const Rating = ({ stars = 0 }) => <span>{stars}★</span>;
const WishlistIcon = (props) => <button>Wishlist</button>;
const ProductPriceView = ({ price }) => <div className="price">SGD {price}</div>;
const CurrencyConverter = ({ currency }) => <span>≈ SGD {currency}</span>;
const ProductDropdown = ({ onSelectSize }) => (
  <select onChange={(e) => onSelectSize(e.target.value)}>
    <option value="">Select size</option>
    <option value="S">S</option>
    <option value="M">M</option>
  </select>
);
const Item = (props) => <button onClick={() => props.onCartClick && props.onCartClick()}>Add to cart</button>;
const ProductDes = ({ productDetail }) => (
  <div className="product-description">
    <h3>Description</h3>
    <div dangerouslySetInnerHTML={{ __html: productDetail?.description || "" }} />
  </div>
);
/* simple icon stubs */
const HiMinus = () => <span>-</span>;
const BsPlusLg = () => <span>+</span>;

/*
  Dummy translation function and urlLanguage for demo purposes
*/
const t = (s) => s;
const urlLanguage = "";

const Product = ({ product = "Demo product" }) => {
  // Dummy product detail source (used when actual data is not passed)
  const defaultProductDetail = {
    id: 123,
    title: "Demo ScolioLife Brace",
    price: 199.99,
    description: "<p>This is a demo product description.</p>",
    product_review: [{ id: 1, text: "Good" }, { id: 2, text: "Great" }],
    photo: "/assets/images/demo-product.jpg",
    slug: "demo-scolio-brace",
    product_sku: "SLF-001",
    dimension_height: 10,
    dimension_length: 20,
    dimension_weight: 0.5,
    product_actual_weight: 0.6,
    product_type: "variable-product", // or "simple-product"
    lang: "en",
    cat_info: { slug: "braces", title: "Braces" },
    amazon_link: "",
    amazon_image_link: "",
  };

  // If a real productDetail prop is later passed, swap this assignment
  const [productDetail] = useState(defaultProductDetail);

  // Other dummy state/variables used in the component
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(""); // empty = not selected
  const [showAlert, setShowAlert] = useState(false);
  const [showPrice] = useState(true);
  const [productPrice] = useState(productDetail.price || 0);
  const averageRating = 4.2;
  const wishProps = {};
  const calculatedPrice = productDetail.price;
  const consultationSize = null;
  const slug = productDetail.slug;

  // Dummy handlers
  const handleSelectSize = (size) => {
    setSelectedSize(size);
    setShowAlert(false);
  };
  const handleMinusQuantity = () => setQuantity((q) => Math.max(1, q - 1));
  const handlePlusQuantity = () => setQuantity((q) => q + 1);
  const handleAddToCart = () => {
    if (productDetail.product_type === "variable-product" && !selectedSize) {
      setShowAlert(true);
      return;
    }
    // demo add to cart behaviour
    console.log("Added to cart:", { id: productDetail.id, quantity, selectedSize });
  };
  const onBuyNowClick = () => {
    console.log("Buy now clicked");
  };
  const updateAproxPrice = (val) => {
    console.log("updateAproxPrice", val);
  };
  const handleChildData = (data) => {
    console.log("child data", data);
  };

  return (
    <AuthenticatedLayout>
      <Banner title={product} />

      <div className="product-section">
        <div className="container">
          <div className="row">
            <ImageSlider productDetail={productDetail ? productDetail : []} />
            <div className="col-md-5">
              <div className="product-text">
                <h2>{productDetail?.title}</h2>

                {(productDetail?.price || productDetail?.price > 0) && (
                  <Fragment>
                    <div className="rating-wishlist-div">
                      <div className="product-star">
                        <p className="star">
                          <Rating stars={averageRating} />
                        </p>
                        <p>
                          ({productDetail?.product_review?.length}
                          {t("product.customer_reviews")})
                        </p>
                      </div>

                      <WishlistIcon product={productDetail} {...wishProps} />
                    </div>

                    <ProductPriceView price={productDetail?.price} />

                    <span className="approx_format">
                      {productDetail ? (
                        <CurrencyConverter
                          currency={productDetail.price}
                          updateAproxPrice={updateAproxPrice}
                        />
                      ) : (
                        ""
                      )}
                    </span>
                  </Fragment>
                )}

                <p
                  dangerouslySetInnerHTML={{
                    __html: productDetail?.description,
                  }}
                ></p>
                {productDetail?.product_type === "variable-product" && (
                  <ProductDropdown
                    onSelectSize={handleSelectSize}
                    calculatedPrice={calculatedPrice}
                  />
                )}
                {showAlert && (
                  <p style={{ color: "red" }}>{t("product-detail.select-some-product")}</p>
                )}

                {productDetail?.product_type === "simple-product" && ""}

                {showPrice ? (
                  <p className="shown-price">${parseFloat(productPrice).toFixed(2)} SGD</p>
                ) : null}

                {(productDetail?.price || productDetail?.price > 0) && (
                  <div className="product-cart">
                    <span className="cart-minus" onClick={() => handleMinusQuantity()}>
                      <HiMinus />
                    </span>
                    <h4>{quantity}</h4>
                    <span className="cart-plus" onClick={() => handlePlusQuantity()}>
                      <BsPlusLg />
                    </span>
                  </div>
                )}

                <Item
                  key={productDetail?.id}
                  id={productDetail?.id}
                  image={productDetail?.photo}
                  title={productDetail?.title}
                  price={productDetail?.price}
                  slug={productDetail?.slug}
                  sku={productDetail?.product_sku}
                  quantity={quantity}
                  dimension_height={productDetail?.dimension_height}
                  dimension_length={productDetail?.dimension_length}
                  dimension_weight={productDetail?.dimension_weight}
                  product_actual_weight={productDetail?.product_actual_weight}
                  product_type={productDetail?.product_type}
                  lang={productDetail?.lang}
                  productType={productDetail?.product_type}
                  disabled={!selectedSize}
                  onCartClick={handleAddToCart}
                  onBuyNowClick={onBuyNowClick}
                  consultationSize={consultationSize}
                />
                <p className="sku">SKU: {productDetail?.product_sku}</p>
                <span className="Category-product">
                  {t("product.category")} :
                  <Link to={`${urlLanguage}/product-category/${productDetail?.cat_info.slug}`}>
                    {productDetail?.cat_info.title}
                  </Link>
                </span>
                {/* Amazon link */}
                {productDetail.amazon_link && (
                  <div>
                    <Link to={productDetail.amazon_link}>
                      <img src={productDetail.amazon_image_link} alt="amazon" />{" "}
                    </Link>
                  </div>
                )}
                <div>
                  <a href="https://www.facebook.com/scoliolife/" title="Follow Us on facebook" target="blank" rel="noreferrer">
                    <img loading="lazy" width="26" height="26" className="scale" src="/assets/images/fb.png" alt="Follow us on facebook" />
                  </a>
                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fscoliolife" title="Follow Us on X" target="blank" rel="noreferrer">
                    <img loading="lazy" width="26" height="26" className="scale" src="/assets/images/tweet.png" alt="Follow us on X" />
                  </a>
                  <a href="https://sg.linkedin.com/in/DrKevinLau" title="Follow Us on Linkedin" target="blank" rel="noreferrer">
                    <img loading="lazy" width="26" height="26" className="scale" src="/assets/images/linkedin.png" alt="Follow us on Linkedin" />
                  </a>
                  <a href="https://drkevinlau.blogspot.com/" title="Follow Us on Blogspot" target="blank" rel="noreferrer">
                    <img loading="lazy" width="26" height="26" className="scale" src="/assets/images/blog.png" alt="Follow us on Blogspot" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductDes productDetail={productDetail ? productDetail : ""} onDataGet={handleChildData} slug={slug} />

      {/* <div className="container">
        <Sidebar />
      </div> */}
    </AuthenticatedLayout>
  );
};

export default Product;