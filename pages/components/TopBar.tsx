import { useEffect, useRef, useState } from "react";
import {
  HiOutlineLogin,
  HiOutlineUserAdd,
  HiPhone,
  HiOutlineShoppingBag,
  HiOutlineSearch,
  HiOutlineMenu,
  HiX,
  HiLogout,
} from "react-icons/hi";
import Link from "next/link";
import { TextInput } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";

export default function TopBar({ visible, setVisible }: any) {
  const { totalItems, isEmpty } = useCart();
  const [categories, setCategories] = useState([] as any);
  const [search, setSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const router = useRouter();
  const searchref: any = useRef();
  const [result, setResult] = useState([] as any);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState([] as any);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : "";
    setUser(user);
  }, []);

  useEffect(() => {
    try {
      axios.get("https://quocson2.fatcatweb.top/product/category").then((res: any) => {
        setCategories(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    let handler = (e: any) => {
      if (!searchref.current?.contains(e.target)) {
        setInputSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleSearch = async (e: any) => {
    setInputSearch(e.target.value);
    if (e.target.value) {
      try {
        await axios
          .get(
            `https://quocson2.fatcatweb.top/product?page=${page}&take=10&sortField=${e.target.value}&search=searchall`
          )
          .then((res) => {
            setResult(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setResult([]);
    }
  };

  return (
    <div className="bg-[#194a0f] text-white text-sm font-medium">
      {search ? (
        <div className="text-black relative font-normal bg-white h-20 flex justify-center items-center">
          <div className="flex items-center w-2/3">
            <HiOutlineSearch className="w-fit text-lg" />
            <input
              className="border-white focus:border-white focus:ring-white w-full"
              value={inputSearch}
              type="search"
              placeholder="Bạn đang tìm kiếm điều gì?"
              required
              onChange={handleSearch}
              // icon={}
            />
          </div>
          <button
            className="text-xl absolute right-1 top-1 bg-white"
            onClick={() => setSearch(false)}
          >
            <HiX />
          </button>
        </div>
      ) : null}

      {user ? (
        <div className="flex justify-center md:justify-between py-2 w-11/12 mx-auto">
          <h1 className="hidden md:block">ALL FOR YOUR HEALTH</h1>
          <div className="flex items-center gap-2">
            <Link href={"/account"}>
              <div className="flex gap-2 items-center border-r border-white pr-2">
                <img 
                className="h-5 w-5 rounded-full object-cover"
                src={user.image} alt="avatar" />
                <p className="text-xs uppercase">
                  {"xin chào, " + user.username}
                </p>
              </div>
            </Link>
            <Link href={"/logout"}>
              <div className="flex gap-1 items-center">
                <HiLogout />
                <p className="text-xs">ĐĂNG XUẤT</p>
              </div>
            </Link>
          </div>
        </div>
      ) : (
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
      )}

      <div className="bg-[#236815] py-2 ">
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
              <h1 className="hidden sm:block md:text-2xl font-bold">
                PHUC FRESH
              </h1>
            </Link>
          </div>

          <div className="w-4/12 md:relative">
            <TextInput
              className="hidden md:block"
              sizing="md"
              type="search"
              placeholder="Bạn đang tìm kiếm điều gì?"
              required
              icon={HiOutlineSearch}
              value={inputSearch}
              onChange={handleSearch}
            />
            {inputSearch === "" ? null : (
              <div
                className="text-xs left-0 w-full top-[80px] md:top-[42px] bg-white text-black h-auto absolute z-30 rounded-lg pb-1"
                ref={searchref}
              >
                {result !== null
                  ? result.map((res: any) => {
                      return (
                        <Link
                          href={"/product/" + res.id}
                          key={res.id}
                          onClick={(e:any) => {
              
                            setResult(null);
                          }}
                        >
                          <div className="flex gap-3 items-center border-b border-gray-300 w-full py-1 hover:bg-gray-100 px-3">
                            <img
                              src={res.image}
                              className="w-12 h-12 rounded-md"
                            />
                            <div className="flex flex-col items-start">
                              <h1>{res.productName}</h1>
                              <h1 className="font-medium">
                                {Intl.NumberFormat().format(res.price)}đ
                              </h1>
                            </div>
                          </div>
                        </Link>
                      );
                    })
                  : null}
              </div>
            )}
          </div>

          <div className="flex gap-6 items-center">
            <div className="hidden md:flex items-center gap-4">
              <HiPhone className="text-3xl" />
              <div className="flex flex-col gap-1 items-center border-white border-l pl-3">
                <p> Hotline 24/7</p>
                <p className="text-lg">0949 119 338</p>
              </div>
            </div>

            <HiOutlineSearch
              onClick={() => setSearch(!search)}
              className="text-xl font-bold block md:hidden cursor-pointer"
            />
            <Link href={"/cart"}>
              <div className="relative">
                <HiOutlineShoppingBag className="text-3xl" />
                {isEmpty ? null : (
                  <div className="-right-2.5 -top-2 absolute bg-[#f9c938] px-1.5 text-sm rounded-full text-center">
                    <span>{totalItems}</span>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:items-center md:justify-evenly md:gap-3 py-3 w-11/12 mx-auto text-xs uppercase">
        {categories
          ? categories.map((category: any) => {
              return (
                <Link
                  className="text-center"
                  key={category.id}
                  href={category.path}
                >
                  {category.category}
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}
