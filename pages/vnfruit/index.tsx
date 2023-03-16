import { Breadcrumb, Rating } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";
import Link from "next/link";

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
          Trái cây Việt Nam
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="md:grid md:grid-cols-4 md:gap-6 w-full md:w-11/12 lg:w-9/12 mx-auto mb-6">
        <div className="col-start-1 col-end-2 hidden md:block">
          <div className="mt-6 border border-gray-200">
            <h1 className="bg-gray-200 mx-1 mt-1 pl-2 uppercase font-medium py-2">
              danh mục
            </h1>
            <div className="pl-1">
              <p>Trái cây Việt Nam</p>
            </div>
          </div>

          <div className="mt-6 border border-gray-200">
            <h1 className="bg-gray-200 mx-1 mt-1 pl-2 uppercase font-medium py-2">
              tìm theo
            </h1>
            <div className="pl-1 mt-2">
              <p className="font-medium text-sm">Thương hiệu</p>
              <div>
                <div className="flex items-center my-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Đà Lạt
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Rau củ Đà Lạt
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Thành Nam
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Vicass
                  </label>
                </div>
              </div>

              <p className="font-medium text-sm mt-8">Giá sản phẩm</p>
              <div>
                <div className="flex items-center my-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Giá dưới 100.000đ
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    100.000đ - 200.000đ
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    200.000đ - 300.000đ
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    300.000đ - 500.000đ
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    500.000đ - 1.000.000đ
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Giá trên 1.000.000đ
                  </label>
                </div>

              </div>

              <p className="font-medium text-sm mt-8">Loại</p>
              <div className="mb-8">
                <div className="flex items-center my-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                  Hộp quà
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Thực phẩm nhập khẩu
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Trái cây Việt Nam
                  </label>
                </div>

                
              </div>

            </div>
          </div>
        </div>

        <div className="md:col-start-2 md:col-end-5 mt-6">
          <h1 className="font-medium">TRÁI CÂY VIỆT NAM</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-4 items-center mt-3 border-b pb-3">
            <p className="font-medium">Xếp theo:</p>

            <div className="flex items-center">
              <input
                defaultChecked
                id="default-radio-1"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Tên A-Z
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Tên Z-A
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="default-radio-3"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-3"
                className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Hàng mới
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="default-radio-4"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-4"
                className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Giá thấp đến cao
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="default-radio-5"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-5"
                className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Giá cao xuống thấp
              </label>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-2 grid-cols-2 md:grid-cols-3 my-3">
            <div className="rounded-md border border-gray-200 shadow-sm hover:shadow-xl bg-white">
              <img
                src="/image/hero5_2.png"
                className="rounded-t-md cursor-pointer w-full h-auto"
                alt="..."
              />
              <Link href={""}>
                <div className="cursor-pointer text-center text-xs">
                  <p className="font-medium text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis h-8">
                    product name
                  </p>
                  <div className="flex gap-3 items-center justify-center mt-1">
                    <div className="flex gap-1 pr-1 items-center border-r border-gray-200">
                      <p>stars</p>
                      <Rating size="sm">
                        <Rating.Star />
                      </Rating>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p>Đã bán</p>
                      <p className="font-medium">2222</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex gap-2 px-2 items-center justify-center">
                <p className="text-xl md:text-base font-medium text-red-600 dark:text-white my-1">
                  9999999 đ
                </p>
                <p className="text-red-500 font-bold text-xs">
                  {"-" + 10 + "%"}
                </p>
              </div>
            </div>

            <div className="rounded-md border border-gray-200 shadow-sm hover:shadow-xl bg-white">
              <img
                src="/image/hero5_2.png"
                className="rounded-t-md cursor-pointer w-full h-auto"
                alt="..."
              />
              <Link href={""}>
                <div className="cursor-pointer text-center text-xs">
                  <p className="font-medium text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis h-8">
                    product name
                  </p>
                  <div className="flex gap-3 items-center justify-center mt-1">
                    <div className="flex gap-1 pr-1 items-center border-r border-gray-200">
                      <p>stars</p>
                      <Rating size="sm">
                        <Rating.Star />
                      </Rating>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p>Đã bán</p>
                      <p className="font-medium">2222</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex gap-2 px-2 items-center justify-center">
                <p className="text-xl md:text-base font-medium text-red-600 dark:text-white my-1">
                  9999999 đ
                </p>
                <p className="text-red-500 font-bold text-xs">
                  {"-" + 10 + "%"}
                </p>
              </div>
            </div>

            <div className="rounded-md border border-gray-200 shadow-sm hover:shadow-xl bg-white">
              <img
                src="/image/hero5_2.png"
                className="rounded-t-md cursor-pointer w-full h-auto"
                alt="..."
              />
              <Link href={""}>
                <div className="cursor-pointer text-center text-xs">
                  <p className="font-medium text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis h-8">
                    product name
                  </p>
                  <div className="flex gap-3 items-center justify-center mt-1">
                    <div className="flex gap-1 pr-1 items-center border-r border-gray-200">
                      <p>stars</p>
                      <Rating size="sm">
                        <Rating.Star />
                      </Rating>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p>Đã bán</p>
                      <p className="font-medium">2222</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex gap-2 px-2 items-center justify-center">
                <p className="text-xl md:text-base font-medium text-red-600 dark:text-white my-1">
                  9999999 đ
                </p>
                <p className="text-red-500 font-bold text-xs">
                  {"-" + 10 + "%"}
                </p>
              </div>
            </div>

            <div className="rounded-md border border-gray-200 shadow-sm hover:shadow-xl bg-white">
              <img
                src="/image/hero5_2.png"
                className="rounded-t-md cursor-pointer w-full h-auto"
                alt="..."
              />
              <Link href={""}>
                <div className="cursor-pointer text-center text-xs">
                  <p className="font-medium text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis h-8">
                    product name
                  </p>
                  <div className="flex gap-3 items-center justify-center mt-1">
                    <div className="flex gap-1 pr-1 items-center border-r border-gray-200">
                      <p>stars</p>
                      <Rating size="sm">
                        <Rating.Star />
                      </Rating>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p>Đã bán</p>
                      <p className="font-medium">2222</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex gap-2 px-2 items-center justify-center">
                <p className="text-xl md:text-base font-medium text-red-600 dark:text-white my-1">
                  9999999 đ
                </p>
                <p className="text-red-500 font-bold text-xs">
                  {"-" + 10 + "%"}
                </p>
              </div>
            </div>

            <div className="rounded-md border border-gray-200 shadow-sm hover:shadow-xl bg-white">
              <img
                src="/image/hero5_2.png"
                className="rounded-t-md cursor-pointer w-full h-auto"
                alt="..."
              />
              <Link href={""}>
                <div className="cursor-pointer text-center text-xs">
                  <p className="font-medium text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis h-8">
                    product name
                  </p>
                  <div className="flex gap-3 items-center justify-center mt-1">
                    <div className="flex gap-1 pr-1 items-center border-r border-gray-200">
                      <p>stars</p>
                      <Rating size="sm">
                        <Rating.Star />
                      </Rating>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p>Đã bán</p>
                      <p className="font-medium">2222</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex gap-2 px-2 items-center justify-center">
                <p className="text-xl md:text-base font-medium text-red-600 dark:text-white my-1">
                  9999999 đ
                </p>
                <p className="text-red-500 font-bold text-xs">
                  {"-" + 10 + "%"}
                </p>
              </div>
            </div>

            <div className="rounded-md border border-gray-200 shadow-sm hover:shadow-xl bg-white">
              <img
                src="/image/hero5_2.png"
                className="rounded-t-md cursor-pointer w-full h-auto"
                alt="..."
              />
              <Link href={""}>
                <div className="cursor-pointer text-center text-xs">
                  <p className="font-medium text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis h-8">
                    product name
                  </p>
                  <div className="flex gap-3 items-center justify-center mt-1">
                    <div className="flex gap-1 pr-1 items-center border-r border-gray-200">
                      <p>stars</p>
                      <Rating size="sm">
                        <Rating.Star />
                      </Rating>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p>Đã bán</p>
                      <p className="font-medium">2222</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex gap-2 px-2 items-center justify-center">
                <p className="text-xl md:text-base font-medium text-red-600 dark:text-white my-1">
                  9999999 đ
                </p>
                <p className="text-red-500 font-bold text-xs">
                  {"-" + 10 + "%"}
                </p>
              </div>
            </div>
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
