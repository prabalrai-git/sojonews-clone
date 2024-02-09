import React, { useState } from "react";
import logo from "../assets/favicon.png";
import DarkModeBlack from "../assets/dark-modeDark.png";
import DarkModeWhite from "../assets/dark-mode.png";

import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { RiMenuFoldFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/features/darkModeSlice";
const NavBar = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSigin = () => {
    navigate("/login");
  };

  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <>
      <div
        style={{ borderColor: darkMode ? "#3F424A" : "#E2F2E9" }}
        className="flex flex-row justify-between border-b-[3px] border-applightgreen mb-10 max-w-commonwidth mx-auto "
      >
        <div>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt=""
            className=" h-[100px] -mb-4 -mt-2  object-cover cursor-pointer"
          />
        </div>
        <div className=" xsm:hidden sm:flex flex flex-row gap-[40px]  items-center">
          <Link className="text-appgreen no-underline ">Contact Us</Link>
          <PrimaryButton title={"Sign In"} width={"80px"} onClick={onSigin} />
          <img
            src={darkMode ? DarkModeWhite : DarkModeBlack}
            onClick={() => dispatch(toggleDarkMode())}
            className="w-[30px] h-[30px] cursor-pointer"
            alt=""
          />
        </div>
        <div className="xsm:flex sm:hidden items-center justify-center text-appgreen">
          <RiMenuFoldFill
            onClick={() => setMobileMenuShow((prev) => !prev)}
            size={40}
          />
        </div>
      </div>
      {mobileMenuShow && (
        <div
          style={{ backgroundColor: darkMode ? "#3F424A" : "white" }}
          className="bg-white shadow-lg max-w-commonwidth mx-auto h-[60px]  relative top-[-45px] flex flex-row justify-around items-center xsm:flex sm:hidden"
        >
          <Link className="text-appgreen no-underline ">Contact Us</Link>
          <PrimaryButton title={"Sign In"} width={"80px"} onClick={onSigin} />
          <img
            src={darkMode ? DarkModeWhite : DarkModeBlack}
            onClick={() => dispatch(toggleDarkMode())}
            className="w-[30px] h-[30px] cursor-pointer"
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default NavBar;
