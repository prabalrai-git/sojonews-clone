import React from "react";
import { FaCopyright } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <footer
      style={{ backgroundColor: darkMode ? "#3F424A" : "#E6E7E9" }}
      className="bg-footergray flex flex-row sm:px-[60px] xsm:px-[5px] justify-between py-[25px]  absolute right-0  bottom-0 left-0 xsm:flex-col gap-5 sm:flex-row text-gray-400"
    >
      <div className="flex flex-row gap-3 justify-center items-center text-sm">
        <FaCopyright />
        <p>Sojo News. All Rights Reserved</p>
      </div>
      <div className="flex flex-row justify-center  text-appgreen gap-2 text-sm">
        <a className="text-appgreen" href="">
          Privacy Policy
        </a>
        <GoDotFill />
        <a className="text-appgreen" href="">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
