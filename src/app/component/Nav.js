"use client";
import NavItem2 from "./NavThreeItems/NavItem2";
import NavItem3 from "./NavThreeItems/NavItem3";
import NavItem4 from "./NavThreeItems/NavItem4";
import { useState } from "react";
export default function Nav({ NavItem, MobileNav }) {
  const [isOpen, setIsOpen] = useState(false);
  let isHover = false; // 這裡的isHover是用來判斷滑鼠是否在導覽列上
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const NavBarItemStyle =
    "absolute md:hidden top-[100px] right-0 w-[250px] bg-gray-800 text-white shadow-md flex flex-col p-4 space-y-4 transform transition-transform duration-500 ease-in-out";
  const LogoStyle =
    "relative lg:text-5xl text-3xl font-bold top-[40%] left-[20%] hover:text-yellow-700 duration-300 cursor-pointer";
  return (
    <>
      <div className=" w-full lg:h-[150px] h-[100px] bg-yellow-300">
        <button className={LogoStyle}>
          <a href="#">Logo</a>
        </button>
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
        <div
          className={`${NavBarItemStyle} ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {MobileNav.map((item, i) => (
            <a
              key={i}
              href="#"
              className="hover:bg-gray-600 p-2 rounded-md text-lg"
            >
              {item}
            </a>
          ))}
        </div>
        {/* 導覽列 - 桌面版 */}
        <div className="hidden md:flex justify-end">
          {NavItem.map((item, i) => (
            /* 這裡的item是NavItem的每一個元素 */
            <a
              key={i}
              href="#"
              className=" px-[3%] py-[1%] rounded-md text-2xl hover:text-orange-400 duration-300 cursor-pointer"
              onMouseEnter={() => (isHover = true)}
              onMouseLeave={() => (isHover = false)}
            >
              {item}
            </a>
          ))}
          {isHover &&
            (() => {
              switch (item) {
                case "What We Do":
                  return <NavItem2 />;
                case "Her Story":
                  return <NavItem3 />;
                case "Library":
                  return <NavItem4 />;
                default:
                  return null;
              }
            })()}
        </div>
      </div>
    </>
  );
}
