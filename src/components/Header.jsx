import { UserAuth } from "../context/AuthContext";
import {
  Button,
  HeaderButton,
  HeaderContainer,
  HeaderContent,
  LinkAuth,
  LogOut,
} from "../styles/components";
import { IconImage } from "../styles/components";
import chatImage from "../images/Chat.svg";
import quizImage from "../images/Quizz.svg";

export const Header = ({ setShow, show }) => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HeaderContainer data-testid="header-container">
      {user !== null && user?.displayName ? (
        <HeaderContent>
          <HeaderButton onClick={() => setShow(!show)}>
            {show ? (
              <IconImage src={quizImage} alt="chat" />
            ) : (
              <IconImage src={chatImage} alt="chat" />
            )}
          </HeaderButton>
          <LogOut onClick={handleSignOut}>Выйти</LogOut>
        </HeaderContent>
      ) : (
        <LinkAuth to="/signin">Войти в аккаунт</LinkAuth>
      )}
    </HeaderContainer>
  );
};
