import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

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

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button size={"icon"}>
          <Menu></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="w-full flex flex-col gap-4 mt-5 space-y-5">
          {navLinks.map(link => (
            <SheetClose asChild key={link.herf}>
              <Link href={link.herf}>
                <Button>{link.label}</Button>
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
