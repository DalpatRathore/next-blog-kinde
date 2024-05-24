"use client";
import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    herf: "/",
    label: "Home",
  },
  {
    herf: "/posts",
    label: "Posts",
  },
  {
    herf: "/create-post",
    label: "Create Post",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between px-7 py-4 border-b">
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={100} height={100}></Image>
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-sm">
          {navLinks.map(link => (
            <li
              key={link.herf}
              className={`${
                pathname === link.herf
                  ? "text-zinc-900 border-b"
                  : "text-zinc-400"
              }`}
            >
              <Link href={link.herf}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
