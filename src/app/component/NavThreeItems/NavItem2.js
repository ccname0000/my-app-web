import React from "react";

export default function NavItem2({ setHoveredItem }) {
  return (
    <div
      className="absolute top-[100px] w-full h-[200px] bg-gray-200 transition-opacity duration-300 ease-in-out opacity-100"
      onMouseEnter={() => setHoveredItem("What We Do")} // 保持開啟
      onMouseLeave={() => setHoveredItem(null)} // 滑出後隱藏
    >
      <p>這是 NavItem2 的內容</p>
    </div>
  );
}
