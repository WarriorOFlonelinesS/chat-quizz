import { UserAuth } from "../context/AuthContext";
import { HeaderContainer, HeaderContent, LinkAuth, LogOut } from "../styles/components";

export const Header = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HeaderContainer>
      {user !== null && user?.displayName ? (
        <HeaderContent>
          <LogOut onClick={handleSignOut}>Logout</LogOut>
        </HeaderContent>
      ) : (
        <LinkAuth to="/signin">Sign in</LinkAuth>
      )}
    </HeaderContainer>
  );
};
