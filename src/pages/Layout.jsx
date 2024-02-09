import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { IoIosArrowDropupCircle } from "react-icons/io";

function Layout() {
  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <IoIosArrowDropupCircle
        onClick={onScrollToTop}
        className="text-appgreen w-[50px] h-[50px] fixed bottom-5 right-5 z-10 cursor-pointer"
      />
      <div>
        <NavBar />
        <div className="min-h-screen max-w-commonwidth mx-auto mb-[180px] ">
          <Outlet />
        </div>
        <div className="relative">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
