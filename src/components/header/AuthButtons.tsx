import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../ui/button";
import { Loader2, LogIn, LogOut } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const AuthButtons = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  if (isLoading) {
    return (
      <Button variant={"secondary"}>
        <Loader2 className="animate-spin w-5 h-5"></Loader2>
      </Button>
    );
  }

  return (
    <>
      {isAuthenticated ? (
        <Button variant={"outline"}>
          <LogoutLink className="flex items-center justify-center">
            <LogOut className="w-5 h-5 mr-2"></LogOut> Log out
          </LogoutLink>
        </Button>
      ) : (
        <Button>
          <LoginLink className="flex items-center justify-center">
            Login
            <LogIn className="w-5 h-5 ml-2"></LogIn>
          </LoginLink>
        </Button>
      )}
    </>
  );
};
export default AuthButtons;
