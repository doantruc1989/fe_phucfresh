import { Breadcrumb, Rating } from "flowbite-react";
import React, { ReactElement, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";
import axios from "axios";
import Link from "next/link";

function Index() {
  const all = {
    sortField: "",
    search: "",
    fromPrice: "",
    toPrice: "",
  };
  const price1 = {
    sortField: "1",
    search: "byprice",
    fromPrice: "0",
    toPrice: "100000",
  };
  const price2 = {
    sortField: "1",
    search: "byprice",
    fromPrice: "100000",
    toPrice: "200000",
  };
  const price3 = {
    sortField: "1",
    search: "byprice",
    fromPrice: "200000",
    toPrice: "300000",
  };
  const price4 = {
    sortField: "1",
    search: "byprice",
    fromPrice: "300000",
    toPrice: "500000",
  };
  const price5 = {
    sortField: "1",
    search: "byprice",
    fromPrice: "500000",
    toPrice: "1000000",
  };
  const price6 = {
    sortField: "1",
    search: "byprice",
    fromPrice: "1000000",
    toPrice: "10000000",
  };
  const brandName1 = {
    sortField: "Hàn Quốc",
    search: "bybrand",
    fromPrice: "",
    toPrice: "",
  };
  const brandName2 = {
    sortField: "Mỹ",
    search: "bybrand",
    fromPrice: "",
    toPrice: "",
  };
  const brandName3 = {
    sortField: "Nam Phi",
    search: "bybrand",
    fromPrice: "",
    toPrice: "",
  };
  const brandName4 = {
    sortField: "New Zealand",
    search: "bybrand",
    fromPrice: "",
    toPrice: "",
  };
  const brandName5 = {
    sortField: "Pháp",
    search: "bybrand",
    fromPrice: "",
    toPrice: "",
  };
  const brandName6 = {
    sortField: "Thái Lan",
    search: "bybrand",
    fromPrice: "",
    toPrice: "",
  };
  const brandName7 = {
    sortField: "Úc",
    search: "bybrand",
    fromPrice: "",
    toPrice: "",
  };
  const brandName8 = {
    sortField: "Đài Loan",
    search: "bybrand",
    fromPrice: "",
    toPrice: "",
  };
  const sortAz = {
    sortField: "productName",
    search: "ASC",
    fromPrice: "",
    toPrice: "",
  };
  const sortZa = {
    sortField: "productName",
    search: "DESC",
    fromPrice: "",
    toPrice: "",
  };
  const newProduct = {
    sortField: "createdAt",
    search: "DESC",
    fromPrice: "",
    toPrice: "",
  };
  const sortPriceAz = {
    sortField: "price",
    search: "ASC",
    fromPrice: "",
    toPrice: "",
  };
  const sortPriceZa = {
    sortField: "price",
    search: "DESC",
    fromPrice: "",
    toPrice: "",
  };
  const cam = {
    sortField: "cam",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };
  const cherry = {
    sortField: "cherry",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };
  const dau = {
    sortField: "dâu",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };
  const dualuoi = {
    sortField: "dưa",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };
  const le = {
    sortField: "lê",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };
  const nho = {
    sortField: "nho",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };
  const quyt = {
    sortField: "quýt",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };
  const tao = {
    sortField: "táo",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };
  const thanhtra = {
    sortField: "thanh trà",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };
  const tac = {
    sortField: "tắc",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };
  const vietquat = {
    sortField: "việt quất",
    search: "byname",
    fromPrice: "",
    toPrice: "",
  };

  const [vnFruits, setVnFruits] = useState([] as any);
  const [page, setPage] = useState(1);
  const [sortField2, setSortField2] = useState(all);

  console.log(vnFruits);

  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:3007/product?page=${page}&take=20&filter=2&sortField=${sortField2?.sortField}&fromPrice=${sortField2?.fromPrice}&toPrice=${sortField2?.toPrice}&search=${sortField2?.search}`
        )
        .then((res: any) => {
          setVnFruits(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [page, sortField2]);

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
          Trái cây nhập khẩu
        </Breadcrumb.Item>
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
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(cam);
                  }}
                >
                  Cam
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(cherry);
                  }}
                >
                  Cherry
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(dau);
                  }}
                >
                  Dâu
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(dualuoi);
                  }}
                >
                  Dưa lưới
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(le);
                  }}
                >
                  Lê
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(nho);
                  }}
                >
                  Nho
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(quyt);
                  }}
                >
                  Quýt
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(tao);
                  }}
                >
                  Táo
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(thanhtra);
                  }}
                >
                  Thanh trà
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(tac);
                  }}
                >
                  Tắc
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(vietquat);
                  }}
                >
                  Việt quất
                </button>
              </div>

              <p className="font-medium text-sm mt-3">Thương hiệu</p>
              <div className="mt-3">
                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(brandName1);
                  }}
                >
                  Hàn Quốc
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(brandName2);
                  }}
                >
                  Mỹ
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(brandName3);
                  }}
                >
                  Nam Phi
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(brandName7);
                  }}
                >
                  Úc
                </button>
                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(brandName4);
                  }}
                >
                  New Zealand
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(brandName5);
                  }}
                >
                  Pháp
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(brandName6);
                  }}
                >
                  Thái Lan
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(brandName8);
                  }}
                >
                  Đài Loan
                </button>
              </div>

              <p className="font-medium text-sm mt-3">Giá sản phẩm</p>
              <div className="mt-3">
                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(price1);
                  }}
                >
                  Giá dưới 100.000đ
                </button>
                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(price2);
                  }}
                >
                  100.000đ - 200.000đ
                </button>
                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(price3);
                  }}
                >
                  200.000đ - 300.000đ
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(price4);
                  }}
                >
                  300.000đ - 500.000đ
                </button>

                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(price5);
                  }}
                >
                  500.000đ - 1.000.000đ
                </button>
                <button
                  className="ml-1 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-green-600 hover:text-white bg-white w-fit"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSortField2(price6);
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
                  setSortField2(sortAz);
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
                  setSortField2(sortZa);
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
                  setSortField2(newProduct);
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
                  setSortField2(sortPriceAz);
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
                  setSortField2(sortPriceZa);
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
                      <Link href={"/product/" + fruit.id}>
                        <img
                          src={fruit.image}
                          className="rounded-t-md cursor-pointer w-full h-60"
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
