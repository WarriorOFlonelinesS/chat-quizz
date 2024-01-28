import { Link } from "react-router-dom";
import { Button, Buttons, ContainerForm, ContentForm, Form, FormAuth, Input, InputEmail, Label, LinkAuth, LinkBack, Text, Title, TitleForm } from "../styles/styles";
import GlobalStyle from "../styles/globalStyle";
import Continue from "../Continue";

export default function LogIn() {
  return (
    <ContainerForm>
      <GlobalStyle />
      <LinkBack to="/">&lsaquo;	 Back</LinkBack>
      <ContentForm>
      <TitleForm>Welcome back</TitleForm>
        <FormAuth onSubmit={""}>
          <InputEmail>
          <Label>Email</Label>
          <Input type="email" />
          </InputEmail>
          <InputEmail>
          <Label>Password</Label>
          <Input type="password" />
          </InputEmail>
          <Buttons>
            <Text>Log in</Text>
            <Button>
              <Continue />
            </Button>
          </Buttons>
        </FormAuth>
        <Text> You don't have account? <LinkAuth to='/signup'>Sign up</LinkAuth></Text>
      </ContentForm>

    </ContainerForm>
  );
}
