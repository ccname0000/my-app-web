export default function SideBar({ isOpen }) {
  const titleStyle = "text-orange-300 text-xl font-bold mb-4";
  const subtitle1 = [
    "Anti Gender - Based Violence and Discrimination",
    "Women and the Economy",
    "East Asia Gender Equality Forum",
    "Women’s Leadership",
  ];
  const subtitle2 = [
    "Dadaocheng",
    "Songshan",
    "Wanhua",
    "Yilan City",
    "Dajia",
    "Lukang",
    "Chiayi City",
    "Tainan City",
    "Kaohsiung City",
  ];
  const subtitle3 = ["Publications", "Multimedia"];

  return (
    <div
      className={`md:hidden absolute top-[13%] right-[6%] h-[90%] w-64 bg-gray-400 p-4 transition-all duration-500 ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <ul>
        <li className={titleStyle}>Home</li>
        <li className={titleStyle}>Who We Are</li>
        <li>
          <p className={titleStyle}>What We Do</p>
          <ul className="text-sm mb-8">
            {subtitle1.map((item, index) => (
              <li key={index} className="mb-4">
                {item}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className={titleStyle}>Her Story</p>
          <ul className="text-sm mb-8">
            {subtitle2.map((item, index) => (
              <li key={index} className="mb-4">
                {item}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className={titleStyle}>Library</p>
          <ul className="text-sm mb-8">
            {subtitle3.map((item, index) => (
              <li key={index} className="mb-4">
                {item}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
