"use client";
import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import ThemeToggle from "../ThemeToggle";
import MainNavMenu from "./MainNavMenu";
import AuthButtons from "./AuthButtons";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b">
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={100} height={100}></Image>
      </Link>
      <div className="flex gap-x-5">
        <div className="hidden md:flex items-center justify-end gap-5">
          <MainNavMenu></MainNavMenu>
          <AuthButtons></AuthButtons>
        </div>
        <div className="flex md:hidden items-center justify-end gap-5">
          <AuthButtons></AuthButtons>
        </div>
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  );
};
export default Header;
