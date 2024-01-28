import { Link } from "react-router-dom";
import { Button, Buttons, ContainerForm, ContentForm, Form, FormAuth, Input, InputEmail, Label, LinkAuth, LinkBack, Text, Title, TitleForm } from "../styles/styles";
import GlobalStyle from "../styles/globalStyle";
import Continue from "../Continue";

export default function SignUp() {
  return (
    <ContainerForm>
      <GlobalStyle />
      <LinkBack to="/">&lsaquo;	 Back</LinkBack>
      <ContentForm>
      <TitleForm>Join to our community</TitleForm>
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
            <Text>Sign Up</Text>
            <Button>
              <Continue />
            </Button>
          </Buttons>
        </FormAuth>
        <Text> Already have an accont? <LinkAuth to='/login'>Log in</LinkAuth></Text>
      </ContentForm>

    </ContainerForm>
  );
}
