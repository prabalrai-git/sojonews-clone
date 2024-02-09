import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";

function NewsCard({ item }) {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div className="w-full cursor-pointer">
      <div className="w-full relative">
        <img
          src={item.image}
          alt=""
          className="w-full h-[280px] object-fill rounded-xl"
        />
        <div
          style={{
            color: darkMode ? "white" : "black",
            backgroundColor: darkMode ? "#3F424A" : "#E6E7E9",
          }}
          className="bg-white w-11/12 font-medium drop-shadow-lg px-5 py-3 mx-auto text-sm absolute right-[0px] left-[0px] bottom-[-25px]"
        >
          {item.title}
        </div>
      </div>
      <p
        style={{ color: darkMode ? "lightgray" : "gray" }}
        className="mt-10 text-gray-700 text-sm"
      >
        {item.previewText.length > 110
          ? item.previewText.slice(0, 110) + "..."
          : item.previewText.length}
      </p>
      <div className="w-full flex justify-between mt-5 items-end">
        <div className="bg-categorygreen text-appgreen rounded-xl px-5 py-1">
          {item.topics[0].name}
        </div>
        <div className="text-appgreen flex gap-[5px] items-center">
          <p className="underline">Continue Reading</p>
          <MdKeyboardArrowRight size={25} />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
