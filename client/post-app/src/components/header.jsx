import React from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Input, Badge } from "antd";
import { useSelector } from "react-redux";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const cart = useSelector((state) => state.cart);
  return (
    <div className="border-b mb-6 ">
      <header className="gap-7 py-4 px-6 flex justify-between items-center">
        <div>
          <Link to="/">
            <h2 className="md:text-4xl text-2xl font-bold">LOGO</h2>
          </Link>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            className="rounded-full max-w-[800px]"
            size="large"
            placeholder="Ürün Ara"
            prefix={<SearchOutlined />}
          />
        </div>
        <div className="bg-white py-3 md:py-0 left-0 bottom-0 md:bg-transparent md:w-auto w-screen menu-links md:static flex justify-between items-center gap-8 fixed z-50 md:px-0 px-4 md:border-t-0 md border-t">
          <Link
            to="/"
            className={`menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center ${
              pathname === "/" && "actice"
            }`}
          >
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="text-[10px] md:text-xs">Anasayfa</span>
          </Link>
          <Badge className="md:flex hidden" count={cart.cartItems.length}>
            <Link
              to="/cart"
              className={`menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center ${
                pathname === "/cart" && "actice"
              }`}
            >
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="text-[10px] md:text-xs">Sepet</span>
            </Link>
          </Badge>
          <Link
            to="/bills"
            className={`menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center ${
              pathname === "/bills" && "actice"
            }`}
          >
            <ReceiptLongOutlinedIcon className="  md:text-2xl text-xl" />
            <span className="text-[10px] md:text-xs">Faturalar</span>
          </Link>
          <Link
            to="/customers"
            className={`menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center ${
              pathname === "/customers" && "actice"
            }`}
          >
            <PersonOutlineOutlinedIcon className="md:text-2xl text-xl" />
            <span className="text-[10px] md:text-xs">Müşteriler</span>
          </Link>
          <Link
            to="/statistic"
            className={`menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center ${
              pathname === "/statistic" && "actice"
            }`}
          >
            <DataSaverOffOutlinedIcon className="md:text-2xl text-xl" />
            <span className="text-[10px] md:text-xs">İstatis</span>
          </Link>
          <div
            onClick={() => {
              let answer = window.confirm(
                "Are you sure you want to exit this session?"
              );
              if (answer) {
                localStorage.removeItem("popUser");
                navigate("/login");
              }
            }}
            className="text-[10px] md:text-xs"
          >
            <Link
              to="/"
              className="menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center"
            >
              <LogoutOutlinedIcon className="md:text-2xl text-xl" />
              <span>Çıkış</span>
            </Link>
          </div>
        </div>
        <Badge className="md:hidden flex" count={5}>
          <Link
            to="/"
            className="menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center "
          >
            <ShoppingCartOutlined className="text-2xl" />
            <span className="text-[10px] md:text-xs">Sepet</span>
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
