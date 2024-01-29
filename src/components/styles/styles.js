import { Link } from "react-router-dom";
import styled from "styled-components";

export const FlexContainer = styled.div`
  width: 100%;
  min-height: 1187px;
  display: flex;
`;
export const Container = styled.div`
  padding: 10px;
  width: 100%;
  background-color: black;
`;

export const ContainerChat = styled(Container)`
  background-color: #292f3f;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%; /* 62.4px */
  letter-spacing: 0.096px;
  text-transform: uppercase;
`;

export const Content = styled.div`
  margin: 60px 70px;
`;
export const ListOfQuestions = styled.ul`
  display: flex;
  align-items: flex-start;
  margin-top: 100px;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;
export const Item = styled.li`
  margin-bottom: 20px;
  display: inline-flex;
  height: 65px;
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
  width: 25px;
  height: 25px;
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
  width: 100%;
  height: 2px;
  background-color: #f7f7f7;
`;

export const LineProgress = styled.div`
  width: 50%;
  height: 9.382px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--light-grey, #e1e1e1);
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 70%;
`;
export const ButtonBack = styled.button`
  width: 78.411px;
  height: 79.745px;
  flex-shrink: 0;
  background-color: transparent;
  margin-right: 30px;
  border: none;
  cursor: pointer;
`;

export const ProgressBar = styled.div`
  display: block;
  width: 1115px;
`;
export const ContentBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderContent = styled.div`
  display: flex;
`

export const Avatar = styled.img`
  background-color: white;
  width: 36.081px;
  height: 36.081px;
  border-radius: 50px;
`;

export const ChatList = styled.ul`
  overflow-y: hidden;
  width: 100%;
  height: 990px;
  list-style: none;
  color: white;
  font-weight: bold;
  padding-left: 40px;
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
  justify-content: center;
  width: 100%;
`;
export const Input = styled.input`
  border: none;
  background: rgba(0, 0, 0, 0.25);
  width: 70%;
  height: 68.379px;
  flex-shrink: 0;
  border-radius: 10px;
  color: white;
  font-size: 30px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 77.904px;
  height: 68.379px;
  background-color: transparent;
  border: none;
  cursor: pointer;
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

export const Text = styled.p`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 117px;
`;

export const LinkAuth = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: white;
`;
