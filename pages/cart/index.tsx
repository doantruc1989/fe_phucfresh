import { Breadcrumb, Button } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";
import { useRouter } from "next/router";

function Index() {
    const router = useRouter();
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
          Giỏ hàng
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="h-screen">
        <div className="flex gap-2 items-end mt-6 w-full md:w-11/12 lg:w-9/12 mx-auto">
          <h1 className="font-base uppercase text-2xl">Giỏ hàng</h1>
          <p className="text-sm">(1 sản phẩm)</p>
        </div>

        <div className="md:grid md:grid-cols-4 gap-4 my-4 w-full md:w-11/12 lg:w-9/12 mx-auto">
          
          <div className="col-start-1 col-end-4 flex gap-4 items-center mb-6">
            <img className="w-24 h-24" src="/image/hero9_2.png" alt="hero9_2" />
            <div className="flex gap-4 items-center">
              <div className="flex flex-col items-start">
                <p className="font-medium">product name</p>
                <p>xoa</p>
              </div>
              <p className="text-green-600 font-medium text-xl">999999 đ</p>
            </div>
          </div>

          <div className="col-start-4 col-end-5">
            <div className="flex justify-between border-b border-gray-100 pb-4">
                <p className="font-medium">Tạm tính:</p>
                <p className="font-medium">75.000 đ</p>
            </div>

            <div className="flex justify-between mt-4">
                <p className="font-medium">Thành tiền:</p>
                <p className="font-bold text-green-600 text-xl">75.000 đ</p>
            </div>

            <Button
            onClick={() => router.push('/checkout')}
            className="w-full mt-6 bg-green-600 uppercase"
            >Thanh Toán Ngay</Button>
            
            <Button
            onClick={() => router.push('/')}
            className="w-full mt-3 hover:bg-green-600 hover:text-white uppercase"
            color={'gray'}
            >Tiếp tục mua hàng</Button>
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
