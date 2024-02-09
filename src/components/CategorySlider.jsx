import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { categories } from "../../fakedata";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CategorySlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      responsive={responsive}
    >
      {categories.map((item) => {
        return (
          <Link
            className="bg-appgray text-black no-underline rounded-lg text-center mx-2 h-[48px] flex justify-center items-center"
            style={{
              color: darkMode ? "white" : "black",
              backgroundColor: darkMode ? "#3F424A" : "#E6E7E9",
            }}
          >
            {item.name}
          </Link>
        );
      })}
    </Carousel>
  );
}

export default CategorySlider;
