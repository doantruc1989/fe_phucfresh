import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import {
  Breadcrumb,
  Button,
  Label,
  Textarea,
  TextInput,
  Tooltip,
} from "flowbite-react";
import Link from "next/link";
import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { HiHome, HiEye, HiEyeOff } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { TabPanel, TabView } from "primereact/tabview";
import OrdersTab from "./OrdersTab";
const PHONE_REGEX = /^[0-9\-\+]{10,15}$/;
const AVT_REGEX = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
const ADDRESS_REGEX = /^\s*\S+(?:\s+\S+){2}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

function Index() {
  const [users, setUsers] = useState([] as any);
  const [userPw, setUserPw] = useState("");
  const [userPw2, setUserPw2] = useState("");
  const [validPw, setValidPw] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [validUrl, setValidUrl] = useState(false);
  const [isSuccess, setIsSuccess] =useState(false);
  const [orders, setOrders] = useState([] as any);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    setValidPw(PWD_REGEX.test(userPw) && userPw === userPw2 && userPw !== "");
  }, [userPw, userPw2]);

  useEffect(() => {
    setValidAddress(ADDRESS_REGEX.test(address));
  }, [address]);

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
  }, [phone]);

  useEffect(() => {
    setValidUrl(AVT_REGEX.test(avatar));
  }, [avatar]);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : "";
    const id = user.id;
    const config = {
      baseURL: "https://quocson2.fatcatweb.top/",
      headers: { Authorization: "Bearer " + user?.tokens?.accessToken },
    };

    const axiosHeader = axios.create(config);
    axiosHeader.get(`/users/${id}`).then((res) => {
      setUsers(res?.data);
      setUserPhone(res?.data?.phone);
    });
  }, [isSuccess]);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : "";
    const id = user.id;
    const config = {
      baseURL: "https://quocson2.fatcatweb.top/",
      headers: { Authorization: "Bearer " + user?.tokens?.accessToken },
    };

    const axiosHeader = axios.create(config);
    axiosHeader.get(`/cart/order/${id}`).then((res) => {
      setOrders(res.data)
    });
  },[paid])

  const handleChangeAvt = () => {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : "";
    const config = {
      baseURL: "https://quocson2.fatcatweb.top/",
      headers: { Authorization: "Bearer " + user?.tokens?.accessToken },
    };

    const axiosHeader = axios.create(config);
    try {
      axiosHeader
        .put(`/users/${users.id}`, {
          image: avatar || users.image,
        })
        .then((res: any) => {
          setIsSuccess(!isSuccess)
          if (res.data) {
            toast("Update user avatar successfully", {
              position: toast.POSITION.TOP_RIGHT,
              type: toast.TYPE.SUCCESS,
              className: "toast-message",
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeAddress = () => {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : "";
    const config = {
      baseURL: "https://quocson2.fatcatweb.top/",
      headers: { Authorization: "Bearer " + user?.tokens?.accessToken },
    };

    const axiosHeader = axios.create(config);
    try {
      axiosHeader
        .put(`/users/${users.id}`, {
          address: address || users.address,
          phone: phone || users.phone,
        })
        .then((res: any) => {
          setIsSuccess(!isSuccess)
          if (res.data) {
            toast("Update user address successfully", {
              position: toast.POSITION.TOP_RIGHT,
              type: toast.TYPE.SUCCESS,
              className: "toast-message",
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePw = () => {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : "";
    const config = {
      baseURL: "https://quocson2.fatcatweb.top/",
      headers: { Authorization: "Bearer " + user?.tokens?.accessToken },
    };

    const axiosHeader = axios.create(config);
    try {
      axiosHeader
        .put(`/users/profile/${users.id}`, {
          password: userPw,
        })
        .then((res: any) => {
          if (res.data) {
            toast("Update user password successfully", {
              position: toast.POSITION.TOP_RIGHT,
              type: toast.TYPE.SUCCESS,
              className: "toast-message",
            });
          }
        });
    } catch (error: any) {
      toast(
        `${error?.response.data.message.map((err: any) => {
          err;
        })}. please try again`,
        {
          position: toast.POSITION.TOP_RIGHT,
          type: toast.TYPE.ERROR,
          className: "toast-message",
        }
      );
    }
  };

  return (
    <div>
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5 border-b border-gray-100 pb-4">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
          <ToastContainer />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Trang cá nhân của {users.username}</Breadcrumb.Item>
      </Breadcrumb>
      {users?.email === undefined ? (
        <>
        <p className="w-full text-center my-20 uppercase">u have not permission to be here</p>
        </>
      ) : (
        <div className="md:grid md:grid-cols-3 gap-5">
          <div className="col-end-0 w-full bg-white rounded-xl pt-2 mb-6">
            <img
              src={users.image}
              alt={users.username}
              className=" w-8/12 md:w-10/12 mx-auto mb-6 mt-3 rounded-lg"
            />
            <div className="flex flex-col items-center text-center mb-3">
              <h1 className="font-medium">Email:</h1>
              <p>{users.email}</p>
            </div>
            <div className="flex flex-col items-center text-center mb-3">
              <h1 className="font-medium">Họ tên:</h1>
              <p>{users.username}</p>
            </div>
            <div className="flex flex-col items-center text-center mb-3">
              <h1 className="font-medium">Địa chỉ:</h1>
              <p>{users.address}</p>
            </div>
            <div className="flex flex-col items-center text-center mb-3">
              <h1 className="font-medium">Số điện thoại:</h1>
              {isHidden === false ? (
                <div className="flex items-center gap-3 justify-center">
                  <p>{userPhone}</p>
                  <Link
                    className="text-green-600"
                    href={"#"}
                    onClick={(e: any) => {
                      e.preventDefault();
                      setIsHidden(true);
                    }}
                  >
                    <HiEyeOff />
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-3 justify-center">
                  <p>**********</p>
                  <Link
                    className="text-green-600"
                    href={"#"}
                    onClick={(e: any) => {
                      e.preventDefault();
                      setIsHidden(false);
                    }}
                  >
                    <HiEye />
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-start-2 col-end-4 w-full bg-white text-xs rounded-xl pt-2  mb-6">
            <TabView>
              <TabPanel header="Đơn hàng">
                <OrdersTab orders={orders} paid={paid} setPaid={setPaid}/>
              </TabPanel>
              <TabPanel header="Đổi mật khẩu">
                <div className="flex flex-col justify-center w-9/12 mx-auto">
                  <h1 className="text-center my-6 font-medium uppercase">
                    Đổi mật khẩu
                  </h1>
                  <TextInput
                    color={validPw === true ? "success" : "gray"}
                    value={userPw}
                    placeholder="Mật khẩu mới"
                    onChange={(e) => setUserPw(e.target.value)}
                    type="password"
                    className="mb-3"
                  />
  
                  <TextInput
                    color={validPw === true ? "success" : "gray"}
                    value={userPw2}
                    placeholder="Nhập lại mật khẩu"
                    onChange={(e) => setUserPw2(e.target.value)}
                    type="password"
                    helperText={
                      validPw === false ? (
                        <React.Fragment>
                          <p className="text-xs text-end w-full text-red-500">
                            Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 8 kí
                            tự, trong đó bao gồm ít nhất 1 kí tự hoa, 1 kí tự
                            thường, và 1 số
                          </p>
                        </React.Fragment>
                      ) : null
                    }
                  />
                  <div className="flex items-center justify-center mt-3">
                    <Button
                      color="success"
                      disabled={!validPw}
                      onClick={handleChangePw}
                    >
                      OK
                    </Button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Đổi địa chỉ">
                <div className="flex flex-col justify-center w-9/12 mx-auto">
                  <h1 className="text-center my-6 font-medium uppercase">
                    Đổi địa chỉ
                  </h1>
                  <TextInput
                    type="text"
                    value={address}
                    color={validAddress === true ? "success" : "gray"}
                    placeholder="địa chỉ giao hàng mới"
                    onChange={(e: any) => setAddress(e.target.value)}
                    helperText={
                      validAddress === false ? (
                        <React.Fragment>
                          <p className="text-xs text-end w-full text-red-500">
                            Địa chỉ không hợp lệ
                          </p>
                        </React.Fragment>
                      ) : null
                    }
                  />
                  <TextInput
                    className="mt-3"
                    type="text"
                    value={phone}
                    color={validPhone === true ? "success" : "gray"}
                    placeholder="Số điện thoại mới"
                    onChange={(e: any) => setPhone(e.target.value)}
                    helperText={
                      validPhone === false ? (
                        <React.Fragment>
                          <p className="text-xs text-end w-full text-red-500">
                            Số điện thoại không hợp lệ
                          </p>
                        </React.Fragment>
                      ) : null
                    }
                  />
                  <div className="flex items-center justify-center mt-3">
                    <Button
                      color="success"
                      disabled={!validAddress && !validPhone}
                      className="w-fit"
                      onClick={handleChangeAddress}
                    >
                      OK
                    </Button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Đổi avatar">
                <div className="flex flex-col justify-center w-9/12 mx-auto">
                  <h1 className="text-center my-6 font-medium uppercase">
                    Đổi avatar
                  </h1>
                  <TextInput
                    color={validUrl === true ? "success" : "gray"}
                    type="text"
                    value={avatar}
                    placeholder="url hình ảnh avt https://...."
                    onChange={(e: any) => setAvatar(e.target.value)}
                    helperText={
                      validUrl === false ? (
                        <React.Fragment>
                          <p className="text-xs text-end w-full text-red-500">
                            URL avatar không hợp lệ. URL phải có đuôi là jpg jpeg
                            png webp avif gif svg
                          </p>
                        </React.Fragment>
                      ) : null
                    }
                  />
                  <div className="flex items-center justify-center mt-3">
                    <Button
                      color="success"
                      disabled={avatar === "" ? true : false}
                      onClick={handleChangeAvt}
                    >
                      OK
                    </Button>
                  </div>
                </div>
              </TabPanel>
            </TabView>
          </div>
        </div>
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
