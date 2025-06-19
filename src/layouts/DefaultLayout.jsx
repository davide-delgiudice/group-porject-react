import { Outlet } from "react-router";
import Header from "../components/Header";
import ShoppingCart from "../components/ShoppingCart";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="d-flex justify-content-between">
        <div className="col-10">
          <Outlet />
        </div>
        <div className="col-2 p-3">
          <ShoppingCart />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
