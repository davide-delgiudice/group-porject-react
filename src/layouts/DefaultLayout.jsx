import { Outlet } from "react-router";
import Header from "../components/Header";
import ShoppingCart from "../components/ShoppingCart";
import { useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import AddCartAlert from "../components/AddCartAlert";


const DefaultLayout = () => {

  const { cartProducts } = useCart()

  return (
    <>
      <div className="d-flex justify-content-center">
        <AddCartAlert />
      </div>
      <Header />
      <main className="d-flex justify-content-between">
        <div className="w-100">
          <Outlet />
        </div>
        
          <ShoppingCart />
      </main>
    </>
  );
};

export default DefaultLayout;
