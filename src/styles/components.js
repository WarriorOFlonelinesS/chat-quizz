import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  @media ${({ theme }) => theme.media.large} {
    display: block;
  }
`;
export const Container = styled.div`
  padding: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const WearningContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StartContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${({ theme }) => theme.media.large} {
    display: ${({ show }) => (show ? "none" : "flex")};
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StartButton = styled(Button)`
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  border-radius: 30px;
  border: 0;
  padding: 15px 30px;
  font-size: 20px;
  background-color: #171a22;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
  width: fit-content;
`;

export const ResultContainer = styled(Container)`
  width: 500px;
  border-radius: 30px;
  padding: 40px;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const QuizzContainer = styled(Container)`
  display: flex;

  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.media.large} {
    display: ${({ show }) => (show ? "none" : "flex")};
  }
`;

export const GameContainer = styled(Container)`
  @media ${({ theme }) => theme.media.large} {
    display: "flex";
    overflow: hidden;
    height: 490px;
    min-width: 295px;
  }
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 591px;
  width: 682px;
  border-radius: 30px;
  padding: 40px;
  background-color: #fff;
  position: relative;
  &:before,
  &:after {
    content: "";
    display: block;
    height: 50px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &:before {
    width: 95%;
    bottom: -10px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 0;
  }

  &:after {
    width: 90%;
    bottom: -20px;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 1;
  }
`;

export const ListOfQuestions = styled.ul`
  list-style: none;
`;

export const Question = styled.li`
  padding: 15px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 10px;
  margin-left: -19px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  @media ${({ theme }) => theme.media.large} {
    margin-left: -48px;
  }

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.3);
  }
`;

export const ContainerChat = styled(Container)`
  background-color: ${({ theme }) => theme.colors.bg};
  width: 100%;
  min-height: 90vh;
  @media ${({ theme }) => theme.media.large} {
    display: ${({ show }) => (show ? "block" : "none")};
  }
`;

export const Title = styled.h1`
  color: black;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  letter-spacing: 0.096px;
  text-transform: uppercase;
  text-align: center;
  @media ${({ theme }) => theme.media.large} {
    font-size: 28px;
  }
`;

export const Content = styled.div`
  margin: 60px 70px;
  height: 68.1vh;
`;
export const Item = styled.li`
  height: 135px;
  margin-bottom: 20px;
  display: inline-flex;
  background-color: white;
  color: black;
  border-radius: 25px;
  border: 1px solid var(--light-grey, #e1e1e1);
  background: var(--white, #fff);
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Round = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  background-color: ${(props) => (props.isDone ? "red" : "gray")};
  margin-right: 10px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  margin-top: 332px;
  color: white;
`;

export const Line = styled.div`
  background-color: #f7f7f7;
  border-radius: 30px;
  background: rgb(18, 231, 48);
  transition: all 0.3s ease-in-out;
  background: linear-gradient(
    90deg,
    rgba(18, 231, 48, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const LineProgress = styled.div`
  height: 10px;
  border-radius: 30px;
  width: ${({ precentage }) => precentage + "%"};
  background: rgb(18, 231, 48);
  transition: all 0.3s ease-in-out;
  background: linear-gradient(
    90deg,
    rgba(18, 231, 48, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  margin-bottom: 25px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 70%;
`;
export const ButtonBack = styled.button`
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  border-radius: 30px;
  border: 0;
  padding: 15px 30px;
  font-size: 20px;
  background-color: red;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 30px;
  background-color: rgb(232, 232, 232);
`;
export const ContentBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 100px;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
  @media ${({ theme }) => theme.media.large} {
    width: 30px;
    height: 30px;
  }
  @media ${({ theme }) => theme.media.small} {
    width: 25px;
    height: 25px;
  }
`;

export const ChatList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  overflow-y: hidden;
  width: 100%;
  height: 80vh;
  list-style: none;
  color: white;
  font-weight: bold;
  padding-left: 0px;
  margin: 0;

  &:hover {
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    -moz-overflow-scrolling: touch;
    -ms-overflow-scrolling: touch;
    -o-overflow-scrolling: touch;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    border: 1px solid #b4b4b4;
    background: #000;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 90%;
  height: 111px;
`;
export const Input = styled.input`
  border: none;
  background: rgba(0, 0, 0, 0.25);
  width: 80%;
  height: 52px;
  flex-shrink: 0;
  border-radius: 10px;
  color: white;
  font-size: 40px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

export const ContainerForm = styled.div`
  margin: 0;
  padding: 10px;
  width: 100%;
`;

export const LinkBack = styled(Link)`
  margin: 150px 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

export const TitleForm = styled.h1`
  font-size: 40px;
  color: white;
`;

export const FormAuth = styled(Form)`
  width: 70%;
  flex-direction: column;
  margin-left: 540px;
`;

export const InputEmail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  color: white;
  font-size: 23px;
  margin-bottom: 30px;
`;

export const LinkAuth = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: white;
  font-size: 27px;
`;

export const StyledMessage = styled.li`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  max-width: fit-content;
  padding: 30px;
  border-radius: 21px;
  word-wrap: break-word;
  ${({ messageClass }) =>
    messageClass === "sent"
      ? css`
          margin-left: 10px;
          justify-content: flex-start;
          flex-direction: row-reverse;
          background-color: #272a35;
          align-self: flex-end;
        `
      : css`
          margin-left: 10px;
          justify-content: flex-start;
          background-color: #373e4e;
        `}
  @media ${({ theme }) => theme.media.large} {
    font-size: 15px;
  }
`;

export const LogOut = styled(Button)`
  width: 77.904px;
  height: 68.379px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Signin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.p`
  margin-top: 52px;
  font-size: 20px;
  ${({ messageClass }) =>
    messageClass === "sent"
      ? css`
          margin-left: 10px;
          margin-left: 33px;
          align-self: flex-end;
        `
      : css`
          margin-left: 10px;
          margin-right: 33px;
          margin-left: 33px;
          justify-content: flex-start;
        `}
  @media ${({ theme }) => theme.media.large} {
    font-size: 15px;
  }
`;

export const SendImage = styled.img`
  max-width: 105%;
`;

export const Image = styled.img`
  max-width: 30%;
  max-width: 30%;
  @media ${({ theme }) => theme.media.large} {
    width: 35%;
  }
`;

export const StartTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.title};
`;

export const WarningTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.title};
`;
export const IconImage = styled.img`
  width: 32px;
`;

export const HeaderButton = styled(Button)`
  display: none;
  @media ${({ theme }) => theme.media.large} {
    display: block;
  }
`;

export const ResultTitle = styled.h1`
  @media ${({ theme }) => theme.media.large} {
    font-size: 22px;
    text-align: center;
  }
`;
