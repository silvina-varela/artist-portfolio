// components/Sidebar.js
import React from "react";
import Menu from "./Menu";
import menuData from "../data.json";

const NavBar = () => {
  return <Menu menuItems={menuData} />;
};

export default NavBar;
