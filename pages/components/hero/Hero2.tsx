import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero2() {
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
      <h1 className="bg-[#f9c938] w-fit uppercase py-1 px-3 font-medium">giá tốt hôm nay</h1>
      <h2 className="text-3xl uppercase font-medium mt-3">hàng mới về</h2>
      <p className="w-1/2 text-gray-400 text-sm">
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
         <img
         className="h-60 w-fit mx-auto"
         src="https://bizweb.dktcdn.net/thumb/large/100/402/383/products/18dad337-3644-41e2-ac87-63bc76948e0e.jpg?v=1678531955000" alt="dsa" />
<img
         className="h-60 w-fit mx-auto"
         src="https://bizweb.dktcdn.net/thumb/large/100/402/383/products/18dad337-3644-41e2-ac87-63bc76948e0e.jpg?v=1678531955000" alt="dsa" />
<img
         className="h-60 w-fit mx-auto"
         src="https://bizweb.dktcdn.net/thumb/large/100/402/383/products/18dad337-3644-41e2-ac87-63bc76948e0e.jpg?v=1678531955000" alt="dsa" />
<img
         className="h-60 w-fit mx-auto"
         src="https://bizweb.dktcdn.net/thumb/large/100/402/383/products/18dad337-3644-41e2-ac87-63bc76948e0e.jpg?v=1678531955000" alt="dsa" />
<img
         className="h-60 w-fit mx-auto"
         src="https://bizweb.dktcdn.net/thumb/large/100/402/383/products/18dad337-3644-41e2-ac87-63bc76948e0e.jpg?v=1678531955000" alt="dsa" />

        </Carousel>
      </div>
    </div>
  );
}

export default Hero2;
