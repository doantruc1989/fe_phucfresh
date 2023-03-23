import { Breadcrumb, Button, Label, TextInput, Tooltip } from "flowbite-react";
import React, { ReactElement, useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const NAME_REGEX = /^\s*\S+(?:\s+\S+){1}/;
const PHONE_REGEX = /^[0-9\-\+]{10,15}$/;
const ADDRESS_REGEX = /^\s*\S+(?:\s+\S+){2}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

function Index() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [address, setAdress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [pwd, setPwd] = useState("");
  const [retypePwd, setRetypePwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [validSubmit, setValidSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
  }, [phone]);

  useEffect(() => {
    setValidAddress(ADDRESS_REGEX.test(address));
  }, [address]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd) && pwd === retypePwd);
  }, [pwd, retypePwd]);

  useEffect(() => {
    setValidSubmit(
      validEmail === true &&
        validAddress === true &&
        validName === true &&
        validPhone === true &&
        validPwd === true
    );
  }, [validEmail, validAddress, validName, validPhone, validPwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("https://quocson2.fatcatweb.top/auth/signup", {
        email: email,
        password: pwd,
        username: name,
        address: address,
        phone: phone,
      });
      setSuccess(true);
      setName("");
      setPwd("");
      setEmail("");
      setAdress("");
      setPhone("");
      const timer = setTimeout(() => {
        router.push("/login");
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    } catch (error: any) {
      if (error) {
        toast(`${error?.response.data.message}. Please try again`, {
          position: toast.POSITION.TOP_RIGHT,
          type: toast.TYPE.ERROR,
          className: "toast-message",
        });
      }
    }
  };

  return (
    <div className="h-auto mb-16">
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5 border-b border-gray-100 pb-4">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
          <ToastContainer />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Đăng ký tài khoản</Breadcrumb.Item>
      </Breadcrumb>
      {success === false ? (
        <div className="flex flex-col items-center mt-10 gap-2 w-full md:w-11/12 lg:w-9/12 mx-auto">
          <h1 className="text-2xl font-medium uppercase">Đăng ký tài khoản</h1>
          <p className="text-center">
            Đăng ký để mua hàng và sử dụng những tiện ích mới nhất từ{" "}
            <span className="font-medium">phucfresh.vn</span>
          </p>
          <div className="flex gap-4 mt-6">
            <Link href={"https://quocson2.fatcatweb.top/auth/facebook"}>
              <img
                width="129px"
                height="37px"
                alt="facebook-login-button"
                src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
              />
            </Link>
            <Link href={"https://quocson2.fatcatweb.top/auth/google"}>
              <img
                width="129px"
                height="37px"
                alt="google-login-button"
                src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
              />
            </Link>
          </div>

          <div className="w-9/12">
            <div className="mt-5 w-full">
              <Label className="text-sm font-medium uppercase">
                Họ và Tên:
              </Label>
              <TextInput
                className="w-full"
                placeholder="Nhập họ và tên"
                type="text"
                value={name}
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="mt-5 w-full">
              <Label className="text-sm font-medium uppercase">
                Địa chỉ giao hàng:
              </Label>
              <TextInput
                className="w-full"
                placeholder="Nhập Địa chỉ giao hàng"
                type="text"
                value={address}
                onChange={(e: any) => {
                  setAdress(e.target.value);
                }}
              />
            </div>

            <div className="mt-5 w-full">
              <Tooltip
                placement="right-end"
                style="dark"
                content="Số điện thoại có ít nhất 10 số và ko bao gồm chữ"
              >
                <Label className="text-sm font-medium uppercase">
                  Số điện thoại:
                </Label>
              </Tooltip>
              <TextInput
                className="w-full"
                placeholder="Nhập số điện thoại"
                type="text"
                value={phone}
                onChange={(e: any) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="mt-5 w-full">
              <Label className="text-sm font-medium uppercase mb-2">
                email:
              </Label>
              <TextInput
                className="w-full"
                placeholder="Nhập địa chỉ Email"
                type="email"
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mt-5 w-full">
              <Tooltip
                placement="right-end"
                style="dark"
                content="Mật khẩu phải có ít nhất 8 kí tự, trong đó bao gồm ít nhất 1 kí tự hoa, 1 kí tự thường, và 1 số"
              >
                <Label className="text-sm font-medium uppercase">
                  Mật khẩu:
                </Label>
              </Tooltip>
              <TextInput
                className="w-full"
                placeholder="Nhập Mật khẩu"
                type="password"
                value={pwd}
                onChange={(e: any) => {
                  setPwd(e.target.value);
                }}
              />
            </div>
            <div className="mt-5 w-full">
              <Tooltip
                placement="right-end"
                style="dark"
                content="Vui lòng nhập lại chính xác mật khẩu ở trên"
              >
                <Label className="text-sm font-medium uppercase mb-2">
                  Nhập lại Mật khẩu:
                </Label>
              </Tooltip>
              <TextInput
                className="w-full"
                placeholder="Nhập lại Mật khẩu"
                type="password"
                value={retypePwd}
                onChange={(e: any) => {
                  setRetypePwd(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="mt-3 flex flex-col items-center gap-3 w-full">
            <Button
              className="bg-green-600 uppercase hover:bg-green-800 w-1/2"
              disabled={!validSubmit}
              onClick={handleSubmit}
            >
              tạo tài khoản
            </Button>

            <Link
              className="text-sm uppercase text-green-600 font-medium mt-1"
              href={"/login"}
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      ) : (
        <section className="text-base text-center capitalize font-medium mt-20">
          <h1>Bạn đã đăng ký thành công, hệ thống sẽ chuyển bạn tới trang đăng nhập sau 5 giây nữa. Hoặc </h1>
          <p className="mt-6">
            Bấm vào
            <Link 
            className="text-green-600 underline"
            href="/login">{' đây '}</Link>
            để tới trang đăng nhập
          </p>
        </section>
      )}
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
