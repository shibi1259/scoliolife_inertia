import Banner from "@/Components/Banner";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React from "react";
import { BiCalendarHeart } from "react-icons/bi";

const Cart = () => {
  return (
    <AuthenticatedLayout>
        <Banner title="Cart" />
      <div className="cart-page">
        <div className="container mt-5">
          <div className="row">
            <div className="entry-content rnd-test">
              <div className="woocommerce">
                <div className="wc-empty-cart-message">
                  <div className="cart-empty woocommerce-info">
                    <BiCalendarHeart />
                    Your cart is currently empty
                  </div>
                </div>{" "}
                <p className="return-to-shop">
                  <Link
                    className="button wc-backward"
                    href={route("shop.index")}
                  >
                    Return to shop
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Cart;
