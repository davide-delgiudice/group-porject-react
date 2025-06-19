import { Outlet } from "react-router";
import Header from "../components/Header";
import ShoppingCart from "../components/ShoppingCart";
import { useEffect } from "react";
import { useCart } from "../contexts/CartContext";


const DefaultLayout = () => {

  const { cartItems } = useCart()

  return (
    <>
      <Header />
      <main className="d-flex justify-content-between">
        <div className="w-100">
          <Outlet />
        </div>
        <div className={`col-2 p-3 ${cartItems.length === 0 ? 'd-none' : ''}`}>
          <ShoppingCart />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
