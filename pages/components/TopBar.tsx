import { Fragment, useEffect, useState } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import {
  HiOutlineLogin,
  HiOutlineUserAdd,
  HiPhone,
  HiOutlineShoppingBag,
  HiOutlineSearch,
  HiOutlineMenu,
  HiChevronDown,
} from "react-icons/hi";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";
import { TextInput } from "flowbite-react";
import axios from "axios";

export default function TopBar({ visible, setVisible }: any) {
  const [vnFruit, setVnFruit] = useState(false);
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

  return (
    <div className="bg-[#194a0f] text-white text-sm font-medium">
      <div className="flex justify-center md:justify-between py-2 w-11/12 mx-auto">
        <h1>ALL FOR YOUR HEALTH</h1>
        <div className="md:flex items-center gap-2 hidden">
          <Link href={"/login"}>
            <div className="flex gap-1 items-center border-r border-white pr-2">
              <HiOutlineLogin />
              <p className="text-xs">ĐĂNG NHẬP</p>
            </div>
          </Link>
          <Link href={"/register"}>
            <div className="flex gap-1 items-center">
              <HiOutlineUserAdd />
              <p className="text-xs">ĐĂNG KÝ</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-[#236815] py-2">
        <div className=" flex justify-between items-center w-11/12 mx-auto">
          <div className="flex gap-2 items-center">
            <HiOutlineMenu
              onClick={(e: any) => {
                setVisible(!visible);
              }}
              className="text-xl md:hidden cursor-pointer"
            />
            <Link className="flex gap-2 items-center" href={"/"}>
              <img
                className="h-14 w-14 md:h-20 md:w-20 rounded-full"
                src="/image/logo.png"
                alt="logo"
              />
              <h1 className="text-lg md:text-2xl font-bold">PHUC FRESH</h1>
            </Link>
          </div>

          <div className="hidden w-4/12 md:block">
            <TextInput
              sizing="md"
              type="search"
              placeholder="Email của bạn"
              required
              icon={HiOutlineSearch}
            />
          </div>

          <div className="flex gap-6 items-center">
            <div className="hidden md:flex items-center gap-4">
              <HiPhone className="text-3xl" />
              <div className="flex flex-col gap-1 items-center border-white border-l pl-3">
                <p> Hotline 24/7</p>
                <p className="text-lg">0949 119 338</p>
              </div>
            </div>

            <HiOutlineSearch className="text-xl font-bold block md:hidden cursor-pointer" />
            <Link href={"/cart"}>
              <div className="relative">
                <HiOutlineShoppingBag className="text-3xl" />
                <div className="-right-2.5 -top-2 absolute bg-[#f9c938] px-2 text-sm rounded-full text-center">
                  <span>1</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:items-center md:justify-between md:gap-3 py-3 w-11/12 mx-auto text-xs font-bold uppercase">
        {categories
          ? categories.map((category: any) => {
              return (
                <div
                  key={category.id}
                  className="text-[12px] flex items-center text-center relative"
                >
                  <Link href={category.path}>
                    <div>{category.category}</div>
                  </Link>
                  <HiChevronDown 
                  className="hover:"
                  />
                  <div className="hidden font-medium bg-white text-sm  text-black capitalize w-[150px] absolute z-10 top-11">
                    {category?.subcategory
                      ? category?.subcategory?.map((sub: any) => {
                          return (
                            <Link
                            key={sub.id}
                              href={category.path+sub.path}
                              className="border-b w-full pb-1 hover:bg-gray-200 pt-2 pl-2 cursor-pointer"
                            >
                              {sub.name}
                            </Link>
                          );
                        })
                      : null}
                  </div>
                </div>
              );
            })
          : null}

        {/* {vnFruit === true ? (
            <div className="font-medium bg-white text-sm  text-black capitalize w-[150px] flex flex-col items-start absolute z-10">
              <p className="border-b w-full pb-1 hover:bg-gray-200 pt-2 pl-2 cursor-pointer">
                măng cụt
              </p>
              <p className="border-b w-full pb-1 hover:bg-gray-200 pt-2  pl-2 cursor-pointer">
                bình an farm
              </p>
              <p className="border-b w-full pb-1 hover:bg-gray-200 pt-2  pl-2 cursor-pointer">
                dâu tây
              </p>
              <p className="border-b w-full pb-1 hover:bg-gray-200 pt-2  pl-2 cursor-pointer">
                trái cây khác
              </p>
            </div>
          ) : null} */}

        {/* <div className="flex flex-col items-center gap-2">
          <p>Trái cây việt</p>
          <div className="flex items-center gap-2">
            <p>nam</p>
            <HiChevronDown />
          </div>
        </div> */}
      </div>
    </div>
  );
}
