import React from "react";
import AppleStoreBtn from "../assets/appleBtn1.png";
import GoogleStoreBtn from "../assets/googleBtn.png";
import CategorySlider from "../components/CategorySlider";
import SelectComponent from "../components/SelectComponent";
import { aNews, categories } from "../../fakedata";
import NewsCard from "../components/NewsCard";
import PrimaryButton from "../components/PrimaryButton";
import { useSelector } from "react-redux";

// Filter `option.label` match the user type `input`

function Home() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const selectOptionsFiltered = categories.map((item) => {
    return { value: item.name, label: item.name };
  });

  const item = aNews;

  const darkMode = useSelector((state) => state.darkMode.value);

  console.log(darkMode, "thi is dark mode");

  return (
    <>
      <div className="text-center">
        <h1 className="font-semibold text-4xl">
          Short, Summarized <br /> &{" "}
          <span className="text-appgreen ">Uplifting</span> News{" "}
        </h1>
        <p className="mt-5 font-medium">
          Get Robust Filter And All The Other Feature On Our App, Download Now
          !!
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-[20px]">
        <a href="">
          <img
            src={AppleStoreBtn}
            alt=""
            className="w-[140px] h-[120px] object-contain"
          />
        </a>
        <a href="">
          <img
            src={GoogleStoreBtn}
            alt=""
            className="w-[180px] h-[140px] object-contain"
          />
        </a>
      </div>

      <CategorySlider />
      <div className="flex justify-between my-[40px] xsm:flex-col sm:flex-row xsm:px-5 sm:px-0 gap-4">
        <h1 className="font-semibold">Top News of the Day</h1>
        <SelectComponent options={selectOptionsFiltered} onChange={() => {}} />
      </div>

      <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-between px-[20px]">
        {data.map((yo) => {
          return <NewsCard item={item} />;
        })}
      </div>
      <div className="flex justify-center items-center mt-[50px]">
        <PrimaryButton
          title={"Load More News"}
          onClick={() => {}}
          width={"250px"}
        />
      </div>
    </>
  );
}

export default Home;
