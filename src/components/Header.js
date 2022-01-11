import { BiGlobe } from "react-icons/bi";
import { RiUserFill, RiUserAddFill } from "react-icons/ri";
import getirLogo from "../images/getirLogo.svg";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className="bg-brand-color sticky z-50 top-0">
      <div className="container  mx-auto h-16 md:h-11  flex items-center justify-center md:justify-between">
        <div className=" flex items-center space-x-2.5">
          <img src={getirLogo} alt="" />
        </div>

        <nav className="hidden md:flex gap-x-8 text-sm font-semibold">
          <a
            href="#/"
            className="text-white flex items-center gap-x-2 text-opacity-80 transition-all hover:text-opacity-100"
          >
            <BiGlobe size="20" />
            Türkçe (TR)
          </a>
          <a
            href="#/"
            className="text-white flex items-center gap-x-2 text-opacity-80 transition-all hover:text-opacity-100"
          >
            <RiUserFill size="20" />
            Giriş Yap
          </a>
          <a
            href="#/"
            className="text-white flex items-center gap-x-2 text-opacity-80 transition-all hover:text-opacity-100"
          >
            <RiUserAddFill size="20" />
            Kayıt Ol
          </a>
        </nav>
      </div>
      <button className="flex bg-white h-10 w-full items-center px-3 sm:hidden justify-between">
        <div className="flex items-center">
          <span className="text-purple-700">
            <IoLocationSharp />
          </span>
          <span className="text-sm font-semibold text-gray-700 ml-1">
            Teslimat Adresi Belirle
          </span>
        </div>
        <span className="text-purple-700">
          <IoIosArrowForward size={18} />
        </span>
      </button>
    </div>
  );
}
