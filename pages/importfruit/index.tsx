import { Breadcrumb, Pagination, Rating } from "flowbite-react";
import React, { ReactElement, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";
import axios from "axios";
import Link from "next/link";

function Index() {
  const [vnFruits, setVnFruits] = useState([] as any);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const [search, setSearch] = useState("");
  const [condition, setCondition] = useState("");
  const [condition2, setCondition2] = useState("");
  const [sortField, setSortField] = useState("");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");

  useEffect(() => {
    try {
      axios
        .get(
          `https://quocson2.fatcatweb.top/product?page=${page}&take=20&filter=2&condition2=${condition2}&condition=${condition}&sortField=${sortField}&fromPrice=${fromPrice}&toPrice=${toPrice}&search=${search}`
        )
        .then((res: any) => {
          setVnFruits(res.data[0]);
          setTotalItems(res.data[1]);
        });
    } catch (error) {
      console.log(error);
    }
  }, [page, condition, condition2, sortField, fromPrice, toPrice, search]);

  return (
    <div>
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5 border-b border-gray-100 pb-4">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Trái cây nhập khẩu</Breadcrumb.Item>
      </Breadcrumb>
      <div className="md:grid md:grid-cols-4 md:gap-6 w-full md:w-11/12 lg:w-9/12 mx-auto mb-6">
        <div className="col-start-1 col-end-2 hidden md:block">
          <div className="mt-6 border border-gray-200">
            <h1 className="bg-gray-200 mx-1 mt-1 pl-2 uppercase font-medium py-2">
              tìm theo
            </h1>
            <div className="pl-1 mt-2">
              <p className="font-medium text-sm">Loại</p>
              <div className="mt-3">
                <button
                  className={`${
                    sortField === "cam"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("cam");
                  }}
                >
                  Cam
                </button>

                <button
                  className={`${
                    sortField === "cherry"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("cherry");
                  }}
                >
                  Cherry
                </button>

                <button
                  className={`${
                    sortField === "dâu"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("dâu");
                  }}
                >
                  Dâu
                </button>

                <button
                  className={`${
                    sortField === "dưa"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("dưa");
                  }}
                >
                  Dưa lưới
                </button>

                <button
                  className={`${
                    sortField === "lê"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("lê");
                  }}
                >
                  Lê
                </button>

                <button
                  className={`${
                    sortField === "nho"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("nho");
                  }}
                >
                  Nho
                </button>

                <button
                  className={`${
                    sortField === "quýt"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("quýt");
                  }}
                >
                  Quýt
                </button>

                <button
                  className={`${
                    sortField === "táo"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("táo");
                  }}
                >
                  Táo
                </button>

                <button
                  className={`${
                    sortField === "thanh trà"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("thanh trà");
                  }}
                >
                  Thanh trà
                </button>

                <button
                  className={`${
                    sortField === "tắc"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("tắc");
                  }}
                >
                  Tắc
                </button>

                <button
                  className={`${
                    sortField === "việt quất"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("");
                    setSearch("byname");
                    setSortField("việt quất");
                  }}
                >
                  Việt quất
                </button>
              </div>

              <p className="font-medium text-sm mt-3">Thương hiệu</p>
              <div className="mt-3">
                <button
                  className={`${
                    condition2 === "Hàn Quốc"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("Hàn Quốc");
                    setSearch("bybrand");
                    setSortField("");
                  }}
                >
                  Hàn Quốc
                </button>

                <button
                  className={`${
                    condition2 === "Mỹ"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("Mỹ");
                    setSearch("bybrand");
                    setSortField("");
                  }}
                >
                  Mỹ
                </button>

                <button
                  className={`${
                    condition2 === "Nam Phi"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("Nam Phi");
                    setSearch("bybrand");
                    setSortField("");
                  }}
                >
                  Nam Phi
                </button>

                <button
                  className={`${
                    condition2 === "Úc"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("Úc");
                    setSearch("bybrand");
                    setSortField("");
                  }}
                >
                  Úc
                </button>
                <button
                  className={`${
                    condition2 === "New Zealand"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("New Zealand");
                    setSearch("bybrand");
                    setSortField("");
                  }}
                >
                  New Zealand
                </button>

                <button
                  className={`${
                    condition2 === "Pháp"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("Pháp");
                    setSearch("bybrand");
                    setSortField("");
                  }}
                >
                  Pháp
                </button>

                <button
                  className={`${
                    condition2 === "Thái Lan"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("Thái Lan");
                    setSearch("bybrand");
                    setSortField("");
                  }}
                >
                  Thái Lan
                </button>

                <button
                  className={`${
                    condition2 === "Đài Loan"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("");
                    setToPrice("");
                    setCondition("");
                    setCondition2("Đài Loan");
                    setSearch("bybrand");
                    setSortField("");
                  }}
                >
                  Đài Loan
                </button>
              </div>

              <p className="font-medium text-sm mt-3">Giá sản phẩm</p>
              <div className="mt-3">
                <button
                  className={`${
                    toPrice === "100000"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("0");
                    setToPrice("100000");
                    setCondition("");
                    setCondition2("");
                    setSearch("byprice");
                    setSortField("");
                  }}
                >
                  Giá dưới 100.000đ
                </button>
                <button
                  className={`${
                    toPrice === "200000"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("100000");
                    setToPrice("200000");
                    setCondition("");
                    setCondition2("");
                    setSearch("byprice");
                    setSortField("");
                  }}
                >
                  100.000đ - 200.000đ
                </button>
                <button
                  className={`${
                    toPrice === "300000"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("200000");
                    setToPrice("300000");
                    setCondition("");
                    setCondition2("");
                    setSearch("byprice");
                    setSortField("");
                  }}
                >
                  200.000đ - 300.000đ
                </button>

                <button
                  className={`${
                    toPrice === "500000"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("300000");
                    setToPrice("500000");
                    setCondition("");
                    setCondition2("");
                    setSearch("byprice");
                    setSortField("");
                  }}
                >
                  300.000đ - 500.000đ
                </button>

                <button
                  className={`${
                    toPrice === "1000000"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("500000");
                    setToPrice("1000000");
                    setCondition("");
                    setCondition2("");
                    setSearch("byprice");
                    setSortField("");
                  }}
                >
                  500.000đ - 1.000.000đ
                </button>
                <button
                  className={`${
                    fromPrice === "1000000"
                      ? "bg-green-600 text-white"
                      : "border-gray-200"
                  } ml-1 mb-2 px-2 rounded-xl border hover:bg-green-600 hover:text-white bg-white w-fit`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    setPage(1);
                    setFromPrice("1000000");
                    setToPrice("10000000");
                    setCondition("");
                    setCondition2("");
                    setSearch("byprice");
                    setSortField("");
                  }}
                >
                  Giá trên 1.000.000đ
                </button>
              </div>

              <p className="font-medium text-sm mt-4">Loại</p>
              <div className="mt-3 mb-6">
                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                  }}
                >
                  Hộp quà
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                  }}
                >
                  Thực phẩm nhập khẩu
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                  }}
                >
                  Trái cây Việt Nam
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-start-2 md:col-end-5 mt-6">
          <h1 className="font-medium uppercase">Trái cây nhập khẩu</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-4 items-center mt-3 border-b pb-3">
            <p className="font-medium">Xếp theo:</p>

            <div className="flex items-center">
              <input
                defaultChecked
                id="default-radio-1"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onClick={(e: any) => {
                  setPage(1);
                  setCondition("productName");
                  setSearch("ASC");
                }}
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
                onClick={(e: any) => {
                  setPage(1);
                  setCondition("productName");
                  setSearch("DESC");
                }}
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
                onClick={(e: any) => {
                  setPage(1);
                  setCondition("createdAt");
                  setSearch("DESC");
                }}
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
                onClick={(e: any) => {
                  setPage(1);
                  setCondition("price");
                  setSearch("ASC");
                }}
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
                onClick={(e: any) => {
                  setPage(1);
                  setCondition("price");
                  setSearch("DESC");
                }}
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
            {vnFruits
              ? vnFruits?.map((fruit: any) => {
                  return (
                    <div
                      key={fruit.id}
                      className="rounded-md border border-gray-200 shadow-sm hover:shadow-xl bg-white"
                    >
                      <Link href={"/product/" + fruit.slug}>
                        <img
                          src={fruit.image}
                          className="rounded-t-md cursor-pointer w-full h-60 object-cover"
                          alt="..."
                        />
                        <div className="cursor-pointer text-center text-xs">
                          <p className="font-medium text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis h-8">
                            {fruit.productName.substring(0, 37) + "..."}
                          </p>
                          <div className="flex gap-3 items-center justify-center mt-1">
                            <div className="flex gap-1 pr-1 items-center border-r border-gray-200">
                              <p>{fruit.stars}</p>
                              <Rating size="sm">
                                <Rating.Star />
                              </Rating>
                            </div>
                            <div className="flex gap-1 items-center">
                              <p>Đã bán</p>
                              <p className="font-medium">{fruit.sold}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 px-2 items-center justify-center">
                          <p className="text-xl md:text-base font-medium text-red-600 dark:text-white my-1">
                            {Intl.NumberFormat().format(fruit.price) + " ₫"}
                          </p>
                          <p className="text-red-500 font-bold text-xs">
                            {"-" + 10 + "%"}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
          {totalItems >= 20 ? (
            <div className="flex items-center justify-center text-center mt-6">
              <Pagination
                currentPage={page}
                totalPages={Math.ceil(totalItems / 20)}
                layout="pagination"
                onPageChange={(e: any) => {
                  setPage(e);
                }}
              />
            </div>
          ) : null}
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
