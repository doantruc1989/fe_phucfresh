import Link from "next/link";
import {
  HiMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";

const Footera = () => {
  return (
    <div>
      <div className=" bg-[#f9c938] py-4 px-3 text-[#222]">
        <div className="flex flex-col content-center gap-6 md:flex-row md:justify-between items-center w-11/12 mx-auto lg:w-9/12">

        <div className="flex items-center w-full gap-4">
          <div className="p-4 rounded-full bg-white">
            <HiMail className="text-[#222] text-3xl" />
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="font-medium text-2xl">ĐĂNG KÝ NHẬN TIN</h1>
            <p>Hãy nhận ưu đãi hấp dẫn từ Phuc Fresh nào!</p>
          </div>
        </div>

        <div className="w-full">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Đăng ký
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email của bạn"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-justify mt-8 pb-8 w-11/12 mx-auto lg:w-9/12">
        <div>
          <h1 className="font-medium mb-3">THÔNG TIN LIÊN HỆ</h1>
          <div>
            <div className="flex gap-3 items-center mb-1">
              <div>
                <HiOutlineLocationMarker />
              </div>
              <p>
                Địa chỉ: CN1: 25 Lam Sơn, Phường Linh Tây, Quận Thủ Đức, TP. Hồ
                Chí Minh CN2: 74 Nguyễn Quang Bích, Phường 13, Quận Tân Bình,
                TP. Hồ Chí Minh
              </p>
            </div>
            <div className="flex gap-3 items-center mb-1">
              <div>
                <HiOutlinePhone />
              </div>
              <p>Điện thoại: 0949 119 338</p>
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <HiMail />
              </div>
              <p>Email: sale@phucfresh.vn</p>
            </div>
          </div>

          <p className="mt-3">Hộ kinh doanh Phuc Fresh</p>
          <p className="mt-3">MST: 8299134516</p>
          <p className="mt-3">
            Giấy ĐKKD số : 41Q8030390 Ngày cấp : 28/09/2020
          </p>

          <div className="flex gap-3 items-center justify-start mt-3">
            <img
              className="w-12 h-12 rounded-full"
              src="/image/twitter.png"
              alt="twitter"
            />
            <img
              className="w-12 h-12 rounded-full"
              src="/image/facebook.jpg"
              alt="facebook"
            />
            <img
              className="w-12 h-12 rounded-full"
              src="/image/instagram.jpg"
              alt="instagram"
            />
            <img
              className="w-12 h-12 rounded-full"
              src="/image/youtube.jpg"
              alt="youtube"
            />
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-medium">HƯỚNG DẪN VÀ CHÍNH SÁCH</h1>
            <div className="flex flex-col items-start my-3 gap-2">
              <Link href={""}>Hướng dẫn mua hàng</Link>
              <Link href={""}>Điều khoản dịch vụ</Link>
              <Link href={""}>Hướng dẫn thanh toán</Link>
              <Link href={""}>Chính sách bảo mật thông tin</Link>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="font-medium mb-3">ĐƠN VỊ VẬN CHUYỂN</h1>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <img
                className="border border-black rounded-md"
                src="/image/grab.png"
                alt="grab"
              />
              <img
                className="border border-black rounded-md"
                src="/image/vietnampost.png"
                alt="vietnampost"
              />
              <img
                className="border border-black rounded-md"
                src="/image/best.png"
                alt="best"
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-medium">HỖ TRỢ KHÁCH HÀNG</h1>
            <div className="flex flex-col items-start my-3 gap-2">
              <Link href={""}>Hướng dẫn mua hàng</Link>
              <Link href={""}>Điều khoản dịch vụ</Link>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="font-medium">PHƯƠNG THỨC THANH TOÁN</h1>
            <div className="grid grid-cols-4 md:grid-cols-3 gap-3 mt-3">
              <img
                className="border border-black rounded-md"
                src="/image/visa.png"
                alt="visa"
              />
              <img
                className="border border-black rounded-md"
                src="/image/mastercard.png"
                alt="mastercard"
              />
              <img
                className="border border-black rounded-md"
                src="/image/jcb.png"
                alt="jcb"
              />
              <img
                className="border border-black rounded-md"
                src="/image/momo.png"
                alt="momo"
              />
            </div>
            <img
              className="h-14 w-auto mt-3"
              src="/image/bocongthuong.png"
              alt="bocongthuong"
            />
          </div>
        </div>

      </div>
      <p className="text-center py-2 border-t">© Bản quyền thuộc về Phuc Fresh</p>
    </div>
  );
};

export default Footera;
