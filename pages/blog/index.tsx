import { Breadcrumb, Rating } from "flowbite-react";
import React, { ReactElement, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";
import parse from "html-react-parser";

function Index() {
  
const [blogs, setBlogs] = useState([] as any)


  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:3007/blog`
        )
        .then((res: any) => {
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
        </Breadcrumb.Item>
        <Breadcrumb.Item
        //   href={"/" + productDetail[0]?.categoryID.path}
        //   icon={HiOutlineShoppingBag}
        //   className="capitalize"
        >
          Tin Tức
        </Breadcrumb.Item>
      </Breadcrumb>

     
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto mt-6">
          <h1 className="font-medium">TIN TỨC</h1>

          <div className="grid lg:grid-cols-4 gap-2 grid-cols-2 md:grid-cols-3 my-3 pb-6">
            {blogs
              ? blogs?.map((blog: any) => {
                  return (
                    <div
                      key={blog.id}
                      className="rounded-md border border-gray-200 shadow-sm hover:shadow-xl bg-white"
                    >
                      <Link href={"/blog/" + blog.id}>
                        <img
                          src={blog.image}
                          className="rounded-t-md cursor-pointer w-full h-60"
                          alt="..."
                        />
                        <div className="cursor-pointer text-center text-xs">
                          <p className="font-medium text-base md:text-lg  text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis h-[70px] md:h-16 lg:h-20">
                            {blog.title.substring(0,40)}
                            
                          </p>
                        </div>
                        <div className="mx-2 mb-2">
                        {parse(`${blog?.text.substring(0,100)}...`)}
                        </div>
                       
                      </Link>
                    </div>
                  );
                })
              : null}
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
