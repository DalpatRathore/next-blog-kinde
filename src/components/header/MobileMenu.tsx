import {
  Sheet,
  SheetClose,
  SheetContent,
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
        <Menu className="w-8 h-8"></Menu>
      </SheetTrigger>
      <SheetContent>
        <nav className="w-full flex flex-col gap-4 mt-5">
          {navLinks.map(link => (
            <SheetClose asChild key={link.herf}>
              <Link href={link.herf}>
                <Button className="w-full" variant={"outline"}>
                  {link.label}
                </Button>
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
