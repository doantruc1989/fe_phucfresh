import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Index() {
    const router = useRouter();
  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      const user = stored ? JSON.parse(stored) : "";
      const config = {
        baseURL: "http://localhost:3007/",
        headers: { Authorization: "Bearer " + user.tokens.accessToken },
      };
      const axiosHeader = axios.create(config);
      axiosHeader.get("/auth/logout").then((res) => {
        console.log("res ", res.data.response);
        localStorage.removeItem("user");
        const timer = setTimeout(() => {
          router.push("/");
        }, 5000);
        return () => {
          clearTimeout(timer);
        };
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="text-base text-center capitalize font-medium my-20">
      <p className="text-md capitalize">bạn đă đăng xuất thành công.</p>
      <p>
            {" "}
            hệ thống sẽ chuyển bạn tới trang chủ trong vòng 5 giây nữa hoặc
          </p>
          <p className="mt-6">
            Bấm vào
            <Link className="text-green-600 underline" href="/">
              {" đây "}
            </Link>
            để tới trang chủ ngay lập tức
          </p>
    </div>
  );
}

export default Index;
