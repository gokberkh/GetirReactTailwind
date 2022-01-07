import { BiGlobe } from "react-icons/bi";
import { RiUserFill, RiUserAddFill } from "react-icons/ri";
import getirLogo from "../images/getirLogo.svg";

export default function Header() {
  return (
    <div className="bg-brand-color ">
      <div className="container mx-auto h-11  flex items-center justify-between">
        <div className=" flex items-center space-x-2.5">
          <img className="" src={getirLogo} alt="" />
        </div>

        <nav className="flex gap-x-8 text-sm font-semibold">
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
    </div>
  );
}
