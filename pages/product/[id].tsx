import { Breadcrumb, Button, Tabs, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { HiHome, HiOutlineShoppingBag } from "react-icons/hi";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import Relativeproducts from "./Relativeproducts";

function Index() {
  return (
    <div>
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5 border-b border-gray-100 pb-4">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item
        //   href={"/" + productDetail[0]?.categoryID.path}
        //   icon={HiOutlineShoppingBag}
        //   className="capitalize"
        >
          Hộp quà trái cây
        </Breadcrumb.Item>
        <Breadcrumb.Item className="hidden lg:flex">
          Hộp quà tặng trái cây cao cấp set 1600
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 my-6 w-full md:w-11/12 lg:w-9/12 mx-auto gap-6">
        <div className="md:col-start-1 md:col-end-2 lg:col-end-4">
          <img
            src="https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg"
            alt=""
          />
        </div>

        <div className="md:col-start-2 md:col-end-3 lg:col-start-4 lg:col-end-7">
          <h1 className="text-xl uppercase font-medium">
            Hộp quà tặng trái cây cao cấp set 1600
          </h1>
          <div className="flex gap-3 text-xs mt-2">
            <div className="flex gap-3 border-r border-black pr-3">
              <p>SKU:</p>
              <p>PVN2631</p>
            </div>
            <div className="flex gap-3">
              <p>Thương hiệu:</p>
              <p>Đang cập nhật</p>
            </div>
          </div>
          <div className="flex gap-3 text-sm mt-2 font-medium">
            <p>Tình trạng:</p>
            <p>Còn hàng</p>
          </div>

          <div className="mt-3">
            <p className="text-3xl text-red-500 font-medium"> 1.600.000đ</p>
          </div>

          <div className="flex gap-2 items-center mt-3">
            <p className="text-sm font-medium">Số lượng:</p>
            <div className="w-fit">
              <TextInput />
            </div>
          </div>

          <Button className="my-4 mx-auto bg-[#236815] hover:bg-red-400">
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium uppercase">
                Mua ngay với giá 1.6000.000 đ
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
            <Tabs.Item
             active={true} title="MÔ TẢ"></Tabs.Item>
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
            <Tabs.Item
            className="w-full"
              title="TIN KHUYẾN MÃI">
                <div className="flex gap-2 items-center text-xs mb-4">
                    <img 
                    className="w-12 h-fit"
                    src="/image/hero7_1.png" alt="hero7_1" />
                    <p>BÒ MỘT NẮNG - MUỐI KIẾN VÀNG LÀ MÓN GÌ?</p>
                </div>
                <div className="flex gap-2 items-center text-xs mb-4">
                    <img 
                    className="w-12 h-fit"
                    src="/image/hero7_1.png" alt="hero7_1" />
                    <p>BÒ MỘT NẮNG - MUỐI KIẾN VÀNG LÀ MÓN GÌ?</p>
                </div>
                <div className="flex gap-2 items-center text-xs mb-4">
                    <img 
                    className="w-12 h-fit"
                    src="/image/hero7_1.png" alt="hero7_1" />
                    <p>BÒ MỘT NẮNG - MUỐI KIẾN VÀNG LÀ MÓN GÌ?</p>
                </div>
                <div className="flex gap-2 items-center text-xs mb-4">
                    <img 
                    className="w-12 h-fit"
                    src="/image/hero7_1.png" alt="hero7_1" />
                    <p>BÒ MỘT NẮNG - MUỐI KIẾN VÀNG LÀ MÓN GÌ?</p>
                </div>
             </Tabs.Item>
          </Tabs.Group>
        </div>
        
      </div>

      <Relativeproducts />
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
