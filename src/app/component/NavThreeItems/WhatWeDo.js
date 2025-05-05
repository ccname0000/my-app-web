"use client";
import React, { useEffect, useState } from "react";

export default function NavItem2({ setHoveredItem, hoveredItem }) {
  const [isVisible, setIsVisible] = useState(false); // 控制透明度的狀態

  useEffect(() => {
    let timeout;
    if (hoveredItem === "What We Do") {
      // 當 hoveredItem 為 "What We Do" 時，延遲顯示
      timeout = setTimeout(() => setIsVisible(true), 150); // 延遲 150 毫秒
    }
    return () => clearTimeout(timeout); // 清除定時器，避免內存泄漏
  }, [hoveredItem]);

  const NavItem2Style = `
    relative top-[40px] w-full h-[400px] bg-gray-200 
    transition-opacity duration-500 ease-in-out 
    ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
  `;
  const locations = [
    {
      name: "Anti Gender - Based Violence and Discrimination",
      top: "45%",
      left: "10%",
    },
    { name: "Women and the Economy", top: "65%", left: "10%" },
    { name: "Women and the Economy", top: "45%", left: "50%" },
    { name: "Women's Leadership", top: "65%", left: "50%" },
  ];

  return (
    <div
      className={NavItem2Style}
      onMouseEnter={() => setHoveredItem("What We Do")} // 保持開啟
      onMouseLeave={() => setHoveredItem(null)} // 滑出後隱藏
    >
      <div className="absolute text-2xl text-orange-400 font-bold top-[25%] left-[10%]">
        What We Do
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
