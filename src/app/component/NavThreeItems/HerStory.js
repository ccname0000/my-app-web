"use client";
import React, { useEffect, useState } from "react";

export default function NavItem3({ setHoveredItem, hoveredItem }) {
  const [isVisible, setIsVisible] = useState(false); // 控制透明度的狀態

  useEffect(() => {
    let timeout;
    if (hoveredItem === "Her Story") {
      // 當 hoveredItem 為 "Her Story" 時，延遲顯示
      timeout = setTimeout(() => setIsVisible(true), 150); // 延遲 150 毫秒
    }
    return () => clearTimeout(timeout); // 清除定時器，避免內存泄漏
  }, [hoveredItem]);

  const NavItem3Style = `
    relative top-[40px] w-full h-[550px] bg-gray-200 
    transition-opacity duration-500 ease-in-out 
    ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
  `;

  // 地點資料
  const locations = [
    { name: "Dadaocheng", top: "30%", left: "10%" },
    { name: "Songshan", top: "42%", left: "10%" },
    { name: "Wanhua", top: "54%", left: "10%" },
    { name: "Yilan City", top: "66%", left: "10%" },
    { name: "Dajia", top: "78%", left: "10%" },
    { name: "Lukang", top: "30%", left: "50%" },
    { name: "Chiayi City", top: "42%", left: "50%" },
    { name: "Tainan City", top: "54%", left: "50%" },
    { name: "Kaohsiung City", top: "66%", left: "50%" },
  ];

  return (
    <div
      className={NavItem3Style}
      onMouseEnter={() => setHoveredItem("Her Story")} // 保持開啟
      onMouseLeave={() => setHoveredItem(null)} // 滑出後隱藏
    >
      <div className="absolute text-2xl text-orange-400 font-bold top-[18%] left-[10%]">
        Her Story
      </div>
      {locations.map((location, index) => (
        <div
          key={index}
          className={`absolute text-xl left-[${location.left}] top-[${location.top}]`}
        >
          {location.name}
        </div>
      ))}
    </div>
  );
}
