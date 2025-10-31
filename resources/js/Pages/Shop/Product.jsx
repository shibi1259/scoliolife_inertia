import React, { useState, useEffect, Fragment } from "react";
import { Link, usePage } from "@inertiajs/react";
import ReactPlayer from "react-player";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Banner from "@/Components/Banner";
import Sidebar from "@/Components/Sidebar";
import ImageSlider from "@/Components/Shop/Product/ImageSlider";
import { getProduct } from "@/API/api";
import { useLaravelReactI18n } from "laravel-react-i18n";
import Buttons from "@/Components/Shop/Product/Buttons";
import Description from './../../Components/Shop/Product/Description';
import { Rating } from "@smastrom/react-rating";
import WishListButton from "@/Components/Shop/Product/WishListButton";
import Price from "@/Components/Shop/Product/Price";
import Loader from "@/Components/Loader";
import CurrencyConverter from "@/Components/Shop/Product/CurrencyConverter";
import AttributeDropdown from "@/Components/Shop/Product/AttributeDropdown";

const Product = ({ product, auth }) => {
  const [productDetail, setProductDetail] = useState(null);
  const { t, currentLocale } = useLaravelReactI18n();
  const lang = currentLocale();
  const { product: slug } = usePage().props;
  const [quantity, setQuantity] = useState(1);
  const [read, setRead] = useState(false);
  const [awsData, setAwsData] = useState(false);

  useEffect(() => {
    setProductDetail(product)
    // getProduct(product, lang, auth?.user)
    //   .then((data) => {
    //     if (data) setProductDetail(data);
    //   })
    //   .catch((err) => console.error("Error fetching product:", err));
  }, [product, lang, auth?.user]);


  useEffect(() => {
    try {
      const response = axios.post('https://scoliolife.com/api/v1/get-aws-bucket-order', {
        user_id: (auth && auth.id) ? auth.id : null
      })
        .then((response) => {
          const data = response.data;

          setAwsData(data)
        })
        .catch((error) => {
          console.log("Fetch error:", error);
        });
    } catch (err) {
      console.log(err)
    }

  }, [auth, auth?.id])

  // const calculatePrice = (product) => {
  //   if (!product?.price) return 0;

  //   let finalPrice = parseFloat(product.price);

  //   if (slug === "exercise-dvd") {
  //     if (customized === "Yes" && tool === "USB") {
  //       finalPrice = 80;
  //     } else if (customized === "Yes" && tool === "DVD") {
  //       finalPrice += 55;
  //     } else if (customized === "No") {
  //       finalPrice = itemData.price;
  //     } else {
  //       finalPrice = itemData.price; // fallback/default for this product
  //     }
  //   } else if (slug !== "scoliosis-exercises") {
  //     if (customized === "Yes") {
  //       finalPrice += 55;
  //     }
  //   }

  //   return finalPrice;
  // };
  console.log(usePage().props)
  const handleMinusQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handlePlusQuantity = () => setQuantity((prev) => prev + 1);
  console.log(productDetail)
  console.log(awsData)
  if (!productDetail)
    return (
      <AuthenticatedLayout>
        <Loader />
      </AuthenticatedLayout>
    );

  const hasAwsProducts = productDetail?.aws3_bucket_product?.length > 0;
  const averageRating = productDetail?.product_review?.length ? productDetail.product_review.reduce((sum, review) => sum + Number(review.rate), 0) / productDetail.product_review.length : 0;
  return (
    <AuthenticatedLayout>
      <Banner title={product.title} />

      <div className="container">

        {!hasAwsProducts ? (
          <div className="product-section">
            <div className="row">
              <ImageSlider productDetail={productDetail} />
              <div className="col-md-5">
                <div className="product-text">
                  <h2>{productDetail?.title}</h2>

                  {(productDetail?.price || productDetail?.price > 0) && (
                    <>
                      <div className="rating-wishlist-div">
                        <div className="product-star">
                          <div className="star">
                            <Rating
                              style={{ maxWidth: 100 }}
                              halfFillMode="svg"
                              className="star-product"
                              value={averageRating}
                              readOnly={true}
                            />
                          </div>
                          <p>
                            ({productDetail?.product_review?.length}{t('product')['customer_reviews']})
                          </p>
                        </div>
                        <WishListButton product={productDetail} extraClass="prod-wishlist" />
                      </div>
                      <Price price={productDetail?.price} />
                      <span className="approx_format">
                        <CurrencyConverter price={productDetail.price} />
                      </span>
                    </>
                  )}

                  <p dangerouslySetInnerHTML={{ __html: productDetail?.description }}></p>

                  {/* {productDetail?.product_type === "variable-product" && (
                    <AttributeDropdown attributes={productDetail?.groupedProductAttributes} calculatedPrice={productDetail.price} />
                  )} */}

                  <p style={{ color: "red" }}> {t("product-detail")["select-some-product"]}</p>

                  {/* <p className="shown-price">${parseFloat(productDetail?.price).toFixed(2)} SGD</p> */}

                  <div className="product-cart">
                    <span className="cart-minus" onClick={handleMinusQuantity}>
                      <HiMinus />
                    </span>
                    <h4>{quantity}</h4>
                    <span className="cart-plus" onClick={handlePlusQuantity}>
                      <BsPlusLg />
                    </span>
                  </div>

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
                    {t('product')['category']} :
                    <Link href={`/product-category/${productDetail?.cat_info?.slug}`}>
                      {productDetail?.cat_info?.title}
                    </Link>
                  </span>

                  {productDetail?.amazon_link && (
                    <div>
                      <Link href={productDetail.amazon_link}>
                        <img src={productDetail?.amazon_image_link} alt="amazon" width="100" />
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
            {/* <Description productDetail={productDetail} /> */}
          </div>
        ) : !productDetail ? <Sidebar /> : (
          <>
            <Sidebar />
            <div className="tabs-product">
              <div className="tab-content">
                <div className="product-video-section">
                  {productDetail?.featured_video_url ? <ReactPlayer src={productDetail.featured_video_url} controls style={{ height: '450px', width: '100%' }} /> : <img src={productDetail?.photo} alt="Product Video" />}
                </div>
                {/* Add your AWS product table and other logic here */}

                <div className="product-listing">
                  <div className="product-listing-description">
                    <div className="product-description">
                      <h2>{productDetail?.title}</h2>
                      {!read ? (
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: productDetail?.description,
                            }}
                          ></p>
                          <p
                            className="read_more"
                            onClick={() => setRead((prevOpen) => !prevOpen)}
                          >
                            {t("Patients.read_more")}

                          </p>
                        </div>
                      ) : (
                        <div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: productDetail?.summary,
                            }}
                          ></p>
                          <p
                            className="read_more"
                            onClick={() => setRead((prevOpen) => !prevOpen)}
                          >
                            {t("Patients.read_less")}

                          </p>
                        </div>
                      )}
                    </div>

                    <div className="product-table">
                      <table className="table">
                        <tbody className="table-section">
                          {productDetail?.aws3_bucket_product?.map((item, index) => {
                            return (
                              <tr
                                className="product-video-tr"
                                key={item.id}
                              // onClick={() =>
                              //   toggleModal(
                              //     item,
                              //     index,
                              //     productDetail?.aws3_bucket_product?.length
                              //   )
                              // }
                              >
                                <td className="product-video-index">
                                  {index + 1}
                                </td>
                                <td className="product-video-title">
                                  {item?.video_name}
                                </td>
                                <td className="product-video-duration">
                                  {item?.video_duration}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      {/* {isCompleted ? (
                      <div className="show_more_td_empty">
                        <strong> {t("product-detail.episodes")}</strong>
                      </div>
                    ) : (
                      <div
                        className="show_more_td_empty"
                        onClick={() => loadMore()}
                      >
                        <strong>
                          +
                          {productDetail?.aws3_bucket_product?.length -
                            initialPosts.length}{" "}
                          {t("product-detail.more episodes")} {" "}
                        </strong>
                      </div>
                    )} */}
                    </div>
                  </div>
                  <div className="product-listing-sidebar-main">
                    <div className="product-listing-sidebar">
                      <div className="sidebar_images">
                        <img src={'../images/Streaming_EN.png'} alt="" />
                      </div>

                      {(!auth || (awsData && awsData?.data?.length === 0)) && (
                        <p className="Confused">
                          {" "}
                          {t("product-detail.Confused")}
                        </p>
                      )}
                      {/*  ((authData && authData.id) && (awsData && awsData?.data?.length)) ? true : false;
                          (initialPosts.length && !initialPosts[0]?.order && !initialPosts[0]?.order?.id))
                    */}
                      {(!auth || (awsData && awsData?.data?.length === 0)) && (
                        <form
                          id="ProductTypeForm"
                        // onSubmit={handleSubmit(UploadAddToCart)}
                        >
                          <label htmlFor="product_purchase_type">
                            {t("product-detail")["Choose Product"]}

                          </label>
                          <select
                            name="product_purchase_type"
                            id="product_purchase_type"
                          // onChange={handleSelectChange}
                          >
                            <option value="" className="enuiry_meta">
                              {t("product-detail")["Select an option"]}

                            </option>
                            <option
                              value="stream_plus_download"
                              className="enuiry_meta"
                            >
                              {t("product-detail")["Stream Scoliosis Exercises"]}

                            </option>
                            <option
                              value="customised_streaming"
                              className="enuiry_meta"
                            >
                              {t("product-detail")['Stream']}
                              {" "}
                            </option>
                          </select>
                          {/* {errors.productOption && (
                          <p className="validations">
                            {t("product-detail.option")}

                          </p>
                        )} */}
                          <input
                            name="product_custom_streaming"
                            type="hidden"
                            value="1"
                          />
                          {/* {selectedType ? (
                          <>
                            <div className="wau_wrapper_div">
                              <label htmlFor="wau_file_addon">
                              {t("product-detail.Upload an image")}
                               {" "}
                              </label>
                              <input
                                type="file"
                                name="wau_file_addon"
                                id="wau_file_addon"
                                accept="image/*"
                                className="wau-auto-width wau-files"
                                {...register("CustomizedImgage")}
                              />
                              {errors.CustomizedImgage && (
                                <p className="validations">
                                  {t("product-detail.Upload")}

                                </p>
                              )}
                            </div>{" "}
                            <span id="vaild_err"></span>
                          </>
                        ) : null} */}
                          <div className="ul_price_new">
                            <button
                              type="submit"
                              name="add-to-cart"
                              value="552182"
                              id="valid_add_to_cart"
                              className="single_add_to_cart_button button  product_type_simple alt"
                            >
                              <div className="pr_cont">
                                <div className="svd">
                                  <img
                                    src="https://scoliolife.com/uploads/2022/10/thumb_Streaming.png"
                                    alt=""
                                  />
                                </div>
                                <div className="price_gr_p">
                                  <div className="price_gr">
                                    ${parseFloat(productDetail.price).toFixed(2)} SGD
                                  </div>
                                  <span className="stream-download">
                                    {t("product-detail")["Customized"]}
                                    {" "}
                                  </span>
                                </div>
                              </div>
                            </button>
                          </div>
                        </form>
                      )}

                      {/*<div className="sidebar_images">
                      <img src={Image} alt=""></img>
                    </div>*/}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default Product;
