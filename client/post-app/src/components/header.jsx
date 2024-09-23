import React from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Input, Badge } from "antd";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

const Header = () => {
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
            className="menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center"
          >
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="text-[10px] md:text-xs">Anasayfa</span>
          </Link>
          <Badge className="md:flex hidden" count={5}>
            <Link
              to="/cart"
              className="menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center "
            >
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="text-[10px] md:text-xs">Sepet</span>
            </Link>
          </Badge>
          <Link
            to="/bills"
            className="menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center"
          >
            <ReceiptLongOutlinedIcon className="  md:text-2xl text-xl" />
            <span className="text-[10px] md:text-xs">Faturalar</span>
          </Link>
          <Link
            to="/customers"
            className="menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center"
          >
            <PersonOutlineOutlinedIcon className="md:text-2xl text-xl" />
            <span className="text-[10px] md:text-xs">Müşteriler</span>
          </Link>
          <Link
            to="/statistic"
            className="menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center"
          >
            <DataSaverOffOutlinedIcon className="md:text-2xl text-xl" />
            <span className="text-[10px] md:text-xs">İstatis</span>
          </Link>
          <Link
            to="/"
            className="menu-link hover:text-[#40a9ff] transition-all flex flex-col items-center"
          >
            <LogoutOutlinedIcon className="md:text-2xl text-xl" />
            <span className="text-[10px] md:text-xs">Çıkış</span>
          </Link>
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
