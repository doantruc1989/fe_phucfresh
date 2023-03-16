import React, {  useEffect, useState } from "react";
import HeadSeo from "./HeadSeo";
import Footera from "./Footer";
import TopBar from "./TopBar";
import { Sidebar } from "primereact/sidebar";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import axios from "axios";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([] as any);

  useEffect(() => {
    try {
      axios.get("https://quocson2.fatcatweb.top/product/category").then((res: any) => {
        setCategories(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const prop = {
    title: "tiki trang chủ home page tìm kiếm sản phẩm sales off giá rẻ",
    keywords: "tiki trang chủ home page tìm kiếm sản phẩm sales off giá rẻ",
    description:
      "tiki làm trang trang chủ home page tìm kiếm sản phẩm sales off giá rẻ đơn giản easy",
  };
  return (
    <React.Fragment>
      <HeadSeo prop={prop} />
      <TopBar visible={visible} setVisible={setVisible} />
      <div className="card flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <div className="w-full">
            <div className="flex flex-col items-center">
              <img
                className="w-14 h-14 rounded-full"
                src="/image/logo.png"
                alt="logo"
              />
              <div className="flex justify-around gap-10 mt-3 font-medium w-full py-3">
                <Link
                  className="hover:bg-green-100 px-3 py-2 rounded-lg"
                  href={"/login"}
                >
                  Đăng nhập
                </Link>
                <Link
                  className="hover:bg-green-100 px-3 py-2 rounded-lg"
                  href={"/register"}
                >
                  Đăng ký
                </Link>
              </div>
            </div>
            <div className="w-11/12 mx-auto mt-6">
              {categories
                ? categories.map((category: any) => {
                    return (
                      <>
                        <Link
                          className="flex justify-between items-center capitalize"
                          key={category.id}
                          href={category.path}
                        >
                          <p>{category.category}</p>
                          <HiChevronDown className="text-md" />
                        </Link>
                        {category?.subcategory
                          ? category?.subcategory?.map((sub: any) => {
                              return (
                                <Link
                                  className="flex justify-between items-center capitalize"
                                  key={sub.id}
                                  href={category.path + sub.path}
                                >
                                  <p>{" -" + sub.name}</p>
                                </Link>
                              );
                            })
                          : null}
                      </>
                    );
                  })
                : null}
            </div>
          </div>
        </Sidebar>
      </div>
      <main>{children}</main>
      <Footera />
    </React.Fragment>
  );
};

export default Layout;
