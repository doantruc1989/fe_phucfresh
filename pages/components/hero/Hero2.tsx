import axios from "axios";
import { Button, Rating } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiCheck, HiStar } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero2() {
  const newProduct = {
    sortField: "createdAt",
    search: "allDESC",
    fromPrice: "",
    toPrice: "",
  };

  const [fruits, setFruits] = useState([] as any);
  const [page, setPage] = useState(1);
  const [sortField2, setSortField2] = useState(newProduct);

  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:3007/product?page=${page}&take=20&sortField=${sortField2?.sortField}&search=${sortField2?.search}`
        )
        .then((res: any) => {
          setFruits(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 968 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 968, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  return (
    <div className="mt-12">
      <h1 className="bg-[#f9c938] w-fit uppercase py-1 px-3 font-medium">
        giá tốt hôm nay
      </h1>
      <h2 className="text-3xl uppercase font-medium mt-3">hàng mới về</h2>
      <p className="w-full md:w-1/2 text-gray-400 text-sm">
        Trái cây nhập khẩu, trái cây Việt nam, Quà tặng trái cây, hàng luôn tươi
        mới mỗi ngày.
      </p>
      <div className="mt-6">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          containerClass="carousel-container"
          //   removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
        >
          {fruits?.map((product: any) => {
            return (
              <div
                key={product?.id}
                className="rounded-lg mx-1 border border-gray-200 shadow-sm hover:shadow-lg bg-white mb-1.5"
              >
                <Link href={"/product/" + product.id}>
                  <div className="flex items-center gap-1 px-1 font-medium text-white absolute border rounded-tl-md rounded-br-md border-gray-400 bg-blue-500 text-sm md:text-[10px] uppercase">
                    <HiStar className="font-medium text-sm" />
                    <p>{product?.brand}</p>
                  </div>

                  <div className="relative flex items-center justify-center">
                    <img
                      src={product?.image}
                      className="rounded-t-lg cursor-pointer w-full h-60"
                      alt="..."
                    />
                  </div>

                  <div className="cursor-pointer text-center text-xs">
                    <p className="font-medium text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis h-8">
                      {product?.productName.substring(0, 30) + "..."}
                    </p>
                    <div className="flex gap-3 items-center justify-center mt-1">
                      <div className="flex gap-1 pr-1 items-center border-r border-gray-200">
                        <p>{product?.stars}</p>
                        <Rating size="sm">
                          <Rating.Star />
                        </Rating>
                      </div>
                      <div className="flex gap-1 items-center">
                        <p>Đã bán</p>
                        <p className="font-medium">{product?.sold}</p>
                      </div>
                    </div>
                  </div>

                  {product?.discount?.disPercent ? (
                    <div className="flex gap-2 pl-2 items-center justify-center">
                      <p className="text-base md:text-sm font-medium text-red-600 dark:text-white my-1">
                        {Intl.NumberFormat().format(product?.price)} đ
                      </p>
                      <p className="text-red-500 font-bold text-xs">
                        {"-" + product?.discount?.disPercent + "%"}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-2 pl-2 items-center justify-center mt-2">
                      <p className="text-lg font-medium text-red-600 dark:text-white my-1">
                        {Intl.NumberFormat().format(product?.price)} đ
                      </p>
                    </div>
                  )}
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Hero2;
