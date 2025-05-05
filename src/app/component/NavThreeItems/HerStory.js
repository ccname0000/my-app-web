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
    relative top-[40px] w-full h-[400px] bg-gray-200 
    transition-opacity duration-500 ease-in-out 
    ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
  `;

  return (
    <div
      className={NavItem3Style}
      onMouseEnter={() => setHoveredItem("Her Story")} // 保持開啟
      onMouseLeave={() => setHoveredItem(null)} // 滑出後隱藏
    ></div>
  );
}
