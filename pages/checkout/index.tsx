import { Button, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { HiUserCircle, HiOutlineChevronLeft } from "react-icons/hi";

function Index() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <div className="lg:col-start-1 lg:col-end-3">
        <div className="border-b border-gray-300 pb-20 lg:pb-[200px]">
          <div className="flex items-center justify-center mt-8">
            <Link href={"/"}>
            <img
              className="w-20 h-20 rounded-full"
              src="/image/logo.png"
              alt=""
            />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <div>
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Thông tin mua hàng</h1>
                <div className="flex gap-1 items-center text-green-500">
                  <HiUserCircle className="text-2xl" />
                  <p>Đăng nhập</p>
                </div>
              </div>

              <div className="mt-3">
                <TextInput color={"gray"} placeholder="Email (tuỳ chọn)" />
                <TextInput
                  className="mt-2"
                  color={"gray"}
                  placeholder="Họ và tên"
                />
                <TextInput
                  className="mt-2"
                  color={"gray"}
                  placeholder="Số điện thoại"
                />
                <TextInput
                  className="mt-2"
                  color={"gray"}
                  placeholder="Địa chỉ"
                />
                <TextInput
                  className="mt-2"
                  color={"gray"}
                  placeholder="Tỉnh thành"
                />
                <TextInput
                  className="mt-2"
                  color={"gray"}
                  placeholder="Quận huyện"
                />
                <TextInput
                  className="mt-2"
                  color={"gray"}
                  placeholder="Phường xã"
                />
              </div>
            </div>

            <div>
              <h1 className="font-bold">Vận chuyển</h1>

              <div className="border border-gray-200 rounded-md mt-3">
                <div className="flex items-center justify-between px-3 mt-3 border-b border-gray-200 pb-3">
                  <div className="flex items-center">
                    <input
                      defaultChecked
                      id="default-radio-1"
                      type="radio"
                      name="trans-radio"
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                    >
                      J&T 35.000đ
                    </label>
                  </div>

                  <img
                    className="h-10 w-10 rounded-md"
                    src="/image/jtexpress.png"
                    alt="momo"
                  />
                </div>

                <div className="flex items-center justify-between px-3 mt-3 border-b border-gray-200 pb-3">
                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      name="trans-radio"
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                    >
                      Vận chuyển hoả tốc 50.000đ
                    </label>
                  </div>

                  <img
                    className="h-10 w-10 rounded-md"
                    src="/image/expressdelivery.png"
                    alt="momo"
                  />
                </div>
              </div>

              <h1 className="font-bold mt-6">Thanh Toán</h1>

              <div className="border border-gray-200 rounded-md mt-3">
                <div className="flex items-center justify-between px-3 mt-3 border-b border-gray-200 pb-3">
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
                      Thanh toán qua Ví điện tử MoMo
                    </label>
                  </div>

                  <img
                    className="h-10 w-10 rounded-md"
                    src="/image/momo.png"
                    alt="momo"
                  />
                </div>

                <div className="flex items-center justify-between px-3 mt-3 border-b border-gray-200 pb-3">
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
                      Thanh Toán Trực Tuyến
                    </label>
                  </div>

                  <img
                    className="h-10 w-10 rounded-md"
                    src="/image/payvisa.png"
                    alt="momo"
                  />
                </div>

                <div className="flex items-center justify-between px-3 mt-3 mb-3">
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
                      Thanh toán khi giao hàng (COD)
                    </label>
                  </div>

                  <img
                    className="h-10 w-10 rounded-md"
                    src="/image/cash.png"
                    alt="momo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-end mt-3 text-green-500 mb-8">
          <p>Chính sách bảo mật</p>
          <p>Điều khoản sử dụng</p>
        </div>
      </div>

      <div className="lg:col-start-3 lg:col-end-4 bg-gray-50 border border-gray-300 md:h-screen pb-10">
        <div className="flex gap-2 font-medium text-xl py-3 border-b border-gray-300 pl-3">
          <h1>Đơn hàng</h1>
          <p>(1 sản phẩm)</p>
        </div>

        <div className=" mt-6 px-6 border-b border-gray-300 pb-3">
          <div className="flex gap-2 items-center justify-between mb-3">
            <div className="flex gap-2 items-center">
              <img
                className="h-12 w-12 rounded-md"
                src="/image/momo.png"
                alt=""
              />
              <div className="flex flex-col items-start">
                <div className="flex gap-2">
                  <p>product Name</p>
                  <p>x 1</p>
                </div>
                <p className="text-sm text-gray-400">descript</p>
              </div>
            </div>
            <div>75.000 đ</div>
          </div>

          <div className="flex gap-2 items-center justify-between mb-3">
            <div className="flex gap-2 items-center">
              <img
                className="h-12 w-12 rounded-md"
                src="/image/momo.png"
                alt=""
              />
              <div className="flex flex-col items-start">
                <div className="flex gap-2">
                  <p>product Name</p>
                  <p>x 1</p>
                </div>
                <p className="text-sm text-gray-400">descript</p>
              </div>
            </div>
            <div>75.000 đ</div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border-b border-gray-300 py-4 px-6">
          <TextInput className="w-3/5" placeholder="Nhập mã giảm giá" />
          <Button 
          className="w-2/5 bg-green-600 hover:bg-green-800">
         <p className="md:text-xs lg:text-sm">Áp dụng</p>   
          </Button>
        </div>

        <div className="mt-6 mx-6 border-b border-gray-300 pb-3">
          <div className="flex items-center justify-between">
            <p>Tạm Tính</p>
            <p>75.000 đ</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p>Phí vận chuyển</p>
            <p>35.000 đ</p>
          </div>
        </div>

        <div className="mt-3 mx-6">
          <div className="flex items-center justify-between">
            <p className="text-xl">Tổng cộng</p>
            <p className="text-green-500 text-xl font-medium">110.000 đ</p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <Link href={"/cart"} className="text-green-500">
              <div className="flex gap-1 items-center">
                <HiOutlineChevronLeft />
                <p>Quay về giỏ hàng</p>
              </div>
            </Link>
            <Button 
            className="bg-green-600 w-2/5 hover:bg-green-800">
              <p className="md:text-xs lg:text-sm">Đặt hàng</p>   
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
