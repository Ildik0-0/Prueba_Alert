import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./Header.css";

import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";

import { IoAnalytics } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";

import {  HiOutlineLogout } from "react-icons/hi";

const Header = () => {
  const {darkMode } = useContext(ThemeContext);

 
  return (
    <header className={`${darkMode && "dark"}`}>
      <div className="search-bar">
        <input type="text" placeholder="search..." />
        <BiSearch className="icon" />
      </div>

      <div className="tools">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />
        <IoAnalytics className="icon" />

        <div className="divider"></div>

     
        <RiSettingsLine className="icon" />
        <HiOutlineLogout className="icon" />

        <div className="divider"></div>

       
      </div>
    </header>
  );
};

export default Header;
