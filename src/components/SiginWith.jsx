import React from "react";

function SiginWith({ item, onClick }) {
  return (
    <div
      className="flex flex-row items-center justify-center gap-3 bg-gray-100 sm:w-[360px] py-4 rounded-lg shadow-md z-50 xsm:w-10/12"
      onClick={onClick}
    >
      {item.icon}
      <p>{item.title}</p>
    </div>
  );
}

export default SiginWith;
