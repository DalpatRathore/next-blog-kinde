import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
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

const MainNavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map(link => (
          <NavigationMenuItem key={link.herf}>
            <Link href={link.herf} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default MainNavMenu;
