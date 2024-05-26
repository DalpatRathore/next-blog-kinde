import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../ui/button";
import { LogIn, LogOut } from "lucide-react";

const AuthButtons = () => {
  return (
    <>
      <Button variant={"outline"}>
        <LogoutLink className="flex items-center justify-center">
          <LogOut className="w-5 h-5 mr-2"></LogOut> Log out
        </LogoutLink>
      </Button>
      <Button>
        <LoginLink className="flex items-center justify-center">
          Login
          <LogIn className="w-5 h-5 ml-2"></LogIn>
        </LoginLink>
      </Button>
    </>
  );
};
export default AuthButtons;
