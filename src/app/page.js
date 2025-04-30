import Image from "next/image";
import Nav from "./component/Nav";
import NavItem2 from "./component/NavThreeItems/NavItem2";
export default function Home() {
  const NavItems = ["Who we are", "What We Do", "Her Story", "Library"];
  const smNavItems = [
    "Home",
    "Who we are",
    "What We Do",
    "Her Story",
    "Library",
  ];
  return (
    <>
      <Nav NavItem={NavItems} MobileNav={smNavItems} />
    </>
  );
}
