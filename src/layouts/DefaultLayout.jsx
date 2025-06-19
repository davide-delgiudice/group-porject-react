import { Outlet } from "react-router";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="d-flex justify-content-between">
        <div className="w-100">
          <Outlet />
        </div>
        <div className="">
          
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
