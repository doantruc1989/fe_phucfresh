import axios from "axios";
import { Breadcrumb, Button, Rating, Tabs, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { HiHome, HiOutlineShoppingBag } from "react-icons/hi";
import { CartProvider, useCart } from "react-use-cart";
import Layout from "../components/Layout";
import Relativeproducts from "./Relativeproducts";
import Slider from "react-slick";
import parse from "html-react-parser";
import { ScrollTop } from "primereact/scrolltop";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const [fruit, setFruit] = useState([] as any);
  const router = useRouter();
  const fruitId = router.query.id;
  const [blogs, setBlogs] = useState([] as any);
  const { addItem } = useCart();
  const pagination = [
    fruit?.image,
    fruit?.productimage?.image1,
    fruit?.productimage?.image2,
    fruit?.productimage?.image3,
    fruit?.productimage?.image4,
    fruit?.productimage?.image5,
  ];

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img className="mt-12 h-16 w-full object-cover rounded-md" src={pagination[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thum w-full",
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

  useEffect(() => {
    try {
      axios.get(`https://quocson2.fatcatweb.top/product/${fruitId}`).then((res: any) => {
        setFruit(res.data[0]);
      });
    } catch (error) {
      console.log(error);
    }
  }, [fruitId]);

  useEffect(() => {
    try {
      axios.get("https://quocson2.fatcatweb.top/blog").then((res: any) => {
        setBlogs(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5 border-b border-gray-100 pb-4">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
          <ToastContainer />
        </Breadcrumb.Item>
        <Breadcrumb.Item
          href={fruit?.category?.path}
          icon={HiOutlineShoppingBag}
          className="capitalize"
        >
          {fruit?.category?.category}
        </Breadcrumb.Item>
        <Breadcrumb.Item className="hidden md:flex">
          {fruit?.productName}
          <ScrollTop />
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 mt-6 mb-14 w-full md:w-11/12 lg:w-9/12 mx-auto gap-6">
        <div className="md:col-start-1 md:col-end-2 lg:col-end-4 mb-6">
          <Slider {...settings} className="w-full mx-auto h-fit">
            <img className="h-[380px] object-cover rounded-lg" src={fruit?.image} />
            {fruit?.productimage?.image1 ? (
              <img className="h-[380px] object-cover rounded-lg" src={fruit?.productimage?.image1} />
            ) : null}
            {fruit?.productimage?.image2 ? (
              <img className="h-[380px] object-cover rounded-lg" src={fruit?.productimage?.image2} />
            ) : null}
            {fruit?.productimage?.image3 ? (
              <img className="h-[380px] object-cover rounded-lg" src={fruit?.productimage?.image3} />
            ) : null}
            {fruit?.productimage?.image4 ? (
              <img className="h-[380px] object-cover rounded-lg" src={fruit?.productimage?.image4} />
            ) : null}
            {fruit?.productimage?.image5 ? (
              <img className="h-[380px] object-cover rounded-lg" src={fruit?.productimage?.image5} />
            ) : null}
          </Slider>
        </div>

        <div className="mt-14 md:mt-0 md:col-start-2 md:col-end-3 lg:col-start-4 lg:col-end-7">
          <h1 className="text-xl uppercase font-medium">
            {fruit?.productName}
          </h1>

          <div className="flex gap-2 items-center justify-between my-2">
            <div>
              <Rating>
                <Rating.Star />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white mr-4">
                  {fruit?.stars}
                </p>

                <a
                  href="#review"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  {fruit?.sold + " đánh giá"}
                </a>
              </Rating>
            </div>
            <h5 className="text-sm">{"Đã bán: " + fruit?.sold}</h5>
          </div>

          <div className="flex gap-3 text-xs mt-2 justify-between items-center">
            <div className="flex gap-3">
              <p className="font-medium">Tình trạng:</p>
              <p>{fruit?.quantity > 50 ? "Còn hàng" : "Gần hết hàng"}</p>
            </div>
            <div className="flex gap-3">
              <p className="font-medium">Thương hiệu:</p>
              <p>{fruit?.brand}</p>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-3xl text-red-500 font-medium">
              {" "}
              {Intl.NumberFormat().format(fruit?.price) + " ₫"}
            </p>
          </div>

          <Button
            className="my-4 mx-auto bg-[#236815] hover:bg-red-400"
            onClick={() => {
              addItem(fruit);
              toast("Đã thêm vào giỏ hàng", {
                position: toast.POSITION.BOTTOM_RIGHT,
                type: toast.TYPE.SUCCESS,
                className: "toast-message",
              });
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium uppercase">
                Mua ngay với giá{" "}
                <span>{Intl.NumberFormat().format(fruit?.price) + " ₫"}</span>
              </p>
              <p className="text-xs">Đặt mua giao hàng tận nơi</p>
            </div>
          </Button>
        </div>

        <div className="col-start-7 col-end-9 hidden lg:block">
          <div className="flex flex-col items-center px-2 border border-gray-200">
            <h1 className="text-sm font-medium text-center my-3">
              CHÚNG TÔI LUÔN SẴN SÀNG ĐỂ GIÚP ĐỠ BẠN
            </h1>
            <img className="" src="/image/support.png" alt="" />
            <p className="text-sm text-center my-3">
              Để được hỗ trợ tốt nhất. Hãy gọi
            </p>
            <p className="text-2xl text-red-500 font-medium text-center">
              0949 119 338
            </p>
            <p className="my-3 bg-white px-3 text-[11px]">HOẶC</p>
            <p className="text-sm font-medium text-center">
              Để được hỗ trợ tốt nhất
            </p>
            <Button
              color={"gray"}
              size={"sm"}
              className="uppercase my-3 bg-white hover:bg-[#236815] hover:text-white border-[#236815] border"
            >
              <p className="text-xs">chat với chúng tôi</p>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-8 my-6 w-full md:w-11/12 lg:w-9/12 mx-auto gap-6">
        <div className="md:col-start-1 md:col-end-2 lg:col-end-7">
          <Tabs.Group
            aria-label="Tabs with underline"
            style="underline"
            className="flex justify-center"
          >
            <Tabs.Item active={true} title="MÔ TẢ">
              <div className="text-justify leading-loose">
                {parse(`${fruit?.content}`)}
              </div>
            </Tabs.Item>
            <Tabs.Item title="GIỚI THIỆU">
              <img src="/image/mota.png" alt="" />
            </Tabs.Item>
          </Tabs.Group>
        </div>

        <div className="hidden lg:block lg:col-start-7 lg:col-end-9">
          <Tabs.Group
            aria-label="Tabs with underline"
            style="underline"
            className="flex justify-start"
          >
            <Tabs.Item className="w-full" title="TIN TỨC">
              {blogs
                ? blogs?.map((blog: any) => {
                    return (
                      <Link
                        key={blog?.id}
                        className="flex gap-2 items-center text-xs mb-4"
                        href={"/blog/" + blog?.id}
                      >
                        <img
                          className="w-12 h-10"
                          src={blog?.image}
                          alt="hero7_1"
                        />
                        <p>{blog?.title}</p>
                      </Link>
                    );
                  })
                : null}
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>

      <div className="w-full md:w-11/12  my-6 mx-auto">
        <h2 className="text-2xl uppercase font-medium mb-6">
          Có thể bạn đang tìm kiếm
        </h2>
        <Relativeproducts />
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <CartProvider>
      <Layout>
        <>{page}</>
      </Layout>
    </CartProvider>
  );
};

export default Index;
