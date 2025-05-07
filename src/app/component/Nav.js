"use client";
import NavItem2 from "./NavFourItems/WhatWeDo";
import NavItem3 from "./NavFourItems/HerStory";
import NavItem4 from "./NavFourItems/Library";
import SideBar from "./NavFourItems/SideBar";
import { useState } from "react";

export default function Nav({ NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // 用來追蹤當前懸停的項目

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavBarItemStyle =
    "absolute md:hidden top-[100px] right-0 w-[250px] bg-gray-800 text-white flex flex-col p-4 space-y-4 transform transition-transform duration-500 ease-in-out";
  const LogoStyle =
    "absolute lg:text-5xl text-3xl font-bold top-[5%] left-[20%] hover:text-yellow-700 duration-300 cursor-pointer";

  return (
    <>
      <div className={`w-full lg:h-[150px] h-[100px]`}>
        {/* 漢堡按鈕 - 手機版 */}
        <div className="absolute right-[6%] top-[7%] md:hidden">
          <button
            className="text-3xl text-black"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
        {/* 側邊選單 - 手機版動畫效果 */}

        <SideBar isOpen={isOpen} />
        {/* 導覽列 - 桌面版 */}
        <div className="hidden md:flex justify-end relative space-x-30 right-[4%] top-[35%]">
          {NavItem.map((item, i) => (
            <a
              key={i}
              href="#"
              className="text-2xl font-bold pb-20 hover:text-orange-400 duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredItem(item)} // 設置當前懸停的項目
              onMouseLeave={() => setHoveredItem(null)} // 清除懸停的項目
            >
              {item}
            </a>
          ))}
        </div>
        {/* 根據 hoveredItem 顯示對應的組件 */}
        <a className={LogoStyle} href="#">
          logo
        </a>
        {hoveredItem === "What We Do" && (
          <NavItem2 setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} />
        )}
        {hoveredItem === "Her Story" && (
          <NavItem3 setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} />
        )}
        {hoveredItem === "Library" && (
          <NavItem4 setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} />
        )}
      </div>
    </>
  );
}
