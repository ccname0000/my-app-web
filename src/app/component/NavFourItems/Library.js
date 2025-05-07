"use client";
import React, { useEffect, useState } from "react";

export default function NavItem4({ setHoveredItem, hoveredItem }) {
  const [isVisible, setIsVisible] = useState(false); // 控制透明度的狀態

  useEffect(() => {
    let timeout;
    if (hoveredItem === "Library") {
      // 當 hoveredItem 為 "Library" 時，延遲顯示
      timeout = setTimeout(() => setIsVisible(true), 150); // 延遲 150 毫秒
    }
    return () => clearTimeout(timeout); // 清除定時器，避免內存泄漏
  }, [hoveredItem]);

  const NavItem3Style = `
    relative top-[40px] w-full h-[300px] bg-gray-200 
    transition-opacity duration-500 ease-in-out 
    ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
  `;
  const locations = [
    { name: "Publications", top: "60%", left: "10%" },
    { name: "Multimedia", top: "60%", left: "50%" },
  ];
  return (
    <div
      className={NavItem3Style}
      onMouseEnter={() => setHoveredItem("Library")} // 保持開啟
      onMouseLeave={() => setHoveredItem(null)} // 滑出後隱藏
    >
      <div className="absolute text-2xl text-orange-400 font-bold top-[25%] left-[10%]">
        What We Do
      </div>
      {locations.map((location, index) => (
        <div
          key={index}
          className={`absolute text-xl`}
          style={{ left: location.left, top: location.top }}
        >
          {location.name}
        </div>
      ))}
    </div>
  );
}
