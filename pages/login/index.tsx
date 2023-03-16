import { Breadcrumb, Button, TextInput } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 

function Index() {
  return (
    <div className="h-screen">
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5 border-b border-gray-100 pb-4">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item
        >
          Đăng nhập tài khoản
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="flex flex-col items-center mt-10 gap-2 w-full md:w-11/12 lg:w-9/12 mx-auto">
        <h1 className="text-2xl font-medium uppercase">Đăng nhập tài khoản</h1>
        <p className="text-center">
          Đăng nhập để mua hàng và sử dụng những tiện ích mới nhất từ{" "}
          <span className="font-medium">phucfresh.vn</span>
        </p>
        <div className="flex gap-4 mt-6">
          <Link href={"#"}>
            <img
              width="129px"
              height="37px"
              alt="facebook-login-button"
              src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
            />
          </Link>
          <Link href={"#"}>
            <img
              width="129px"
              height="37px"
              alt="google-login-button"
              src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
            />
          </Link>
        </div>

        <div className="w-9/12">
          <div className="mt-5">
            <p className="text-sm font-medium uppercase mb-2">email:</p>
            <TextInput placeholder="Nhập địa chỉ Email" />
          </div>
          <div className="mt-5">
            <p className="text-sm font-medium uppercase mb-2">Mật khẩu:</p>
            <TextInput placeholder="Nhập Mật khẩu" />
          </div>
        </div>

        <div className="mt-3 flex flex-col items-center gap-3 w-full">
          <Button className="bg-green-600 uppercase hover:bg-green-800 w-1/2">
            Đăng nhập
          </Button>

          <Link className="text-sm uppercase text-green-600 font-medium mt-1" href={"/login/forgetpwd"}>
            Quên mật khẩu?
          </Link>

          <div className="flex gap-1 items-center text-sm">
            <p className="uppercase">BẠN CHƯA CÓ TÀI KHOẢN. ĐĂNG KÝ</p>
            <Link 
            className="text-green-600 uppercase font-medium"
            href={"/register"}>Tại đây</Link>
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
