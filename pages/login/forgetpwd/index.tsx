import { Breadcrumb, Button, TextInput } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../../components/Layout";
import { HiHome } from "react-icons/hi";
import Link from "next/link";

function Index() {
  return (
    <div className="h-screen">
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5 border-b border-gray-100 pb-4">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item
        //   href={"/" + productDetail[0]?.categoryID.path}
        //   icon={HiOutlineShoppingBag}
        //   className="capitalize"
        >
          Đặt lại mật khẩu
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex flex-col items-center mt-10 gap-2 w-full md:w-11/12 lg:w-9/12 mx-auto">
        <h1 className="text-2xl font-medium uppercase">ĐẶT LẠI MẬT KHẨU</h1>
        <p className="text-center">
          Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.
        </p>

        <div className="w-9/12">
          <div className="mt-5">
            <p className="text-sm font-medium uppercase mb-2">email:</p>
            <TextInput placeholder="Nhập địa chỉ Email" />
          </div>
        </div>

        <div className="mt-3 flex flex-col items-center gap-3 w-full">
          <Button className="bg-green-600 uppercase hover:bg-green-800 w-1/2">
            Lấy lại mật khẩu
          </Button>

          <div className="flex gap-1 items-center text-sm">
            <p className="uppercase">quay lại</p>
            <Link 
            className="text-green-600 uppercase font-medium"
            href={"/login"}>Tại đây</Link>
          </div>
        </div>
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
