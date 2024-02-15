import React, { useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { IoIosArrowDropupCircle } from "react-icons/io";
import useCheckTokenExpiration from "../../hooks/useCheckTokenExpiration";
import { useDispatch } from "react-redux";
import { populateCategories } from "../redux/features/categoriesSlice";
import Axios from "../api/server";

function Layout() {
  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isExpired] = useCheckTokenExpiration();

  const navigate = useNavigate();

  useEffect(() => {
    if (isExpired) {
      localStorage.clear();
      navigate("/");
      window.location.reload();
    }
  }, [isExpired]);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const response = await Axios.get("topics");
      dispatch(populateCategories(response.data.data));
    } catch (error) {
      console.log(error);
    }
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
