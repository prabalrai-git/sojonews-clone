import React, { useEffect, useState } from "react";
import AppleStoreBtn from "../assets/appleBtn1.png";
import GoogleStoreBtn from "../assets/googleBtn.png";
import CategorySlider from "../components/CategorySlider";
import SelectComponent from "../components/SelectComponent";
import { categories } from "../../fakedata";
import NewsCard from "../components/NewsCard";
import PrimaryButton from "../components/PrimaryButton";
import Axios from "../api/server";

// Filter `option.label` match the user type `input`

function Home() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  const selectOptionsFiltered = categories.map((item) => {
    return { value: item.name, label: item.name };
  });

  useEffect(() => {
    getNews();
  }, [page]);

  const getNews = async () => {
    const response = await Axios.get(`news?page=${page}&limit=15`);

    if (news?.length > 0) {
      setNews((prev) => [...prev, ...response.data.data]);
    } else {
      setNews(response.data.data);
    }
  };

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
        {news?.map((item) => {
          return <NewsCard item={item} />;
        })}
      </div>
      <div className="flex justify-center items-center mt-[50px]">
        <PrimaryButton
          title={"Load More News"}
          onClick={() => setPage((prev) => prev + 1)}
          width={"250px"}
        />
      </div>
    </>
  );
}

export default Home;
