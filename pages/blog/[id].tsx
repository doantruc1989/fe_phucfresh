import { Breadcrumb, Rating } from "flowbite-react";
import React, { ReactElement, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome, HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import parse from "html-react-parser";

function Index() {
  const [blog, setBlog] = useState([] as any);
  const router = useRouter();
  const blogId = router.query.id;
  console.log(blog);

  useEffect(() => {
    try {
      axios.get(`https://quocson2.fatcatweb.top/blog/${blogId}`).then((res: any) => {
        setBlog(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [blogId]);

  return (
    <div>
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5 border-b border-gray-100 pb-4">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item
          href={"/blog"}
          icon={HiOutlineShoppingBag}
          className="capitalize"
        >
          Tin Tức
        </Breadcrumb.Item>
        <Breadcrumb.Item className="hidden md:flex">
          {blog?.title}
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="w-full md:w-11/12 lg:w-9/12 mx-auto mt-10 mb-6">
        <h1 className="font-medium text-center text-xl"> {blog?.title}</h1>
        <div className="flex flex-col w-9/12 mx-auto mt-10">
          <img src={blog?.image} alt="" />
        </div>
        <div className="text-justify mt-6 leading-loose mx-3 md:mx-0">
          {parse(`${blog?.text}`)}
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
