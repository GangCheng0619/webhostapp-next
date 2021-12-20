import React, { useState, useRef } from "react";
import {
  FieldLineDiv,
  LoginBody,
  LoginBtn,
  LoginContainer,
  LoginHeader,
  LoginPage,
} from "./styles";
import Text from "../../../components/customs/Text";
import Input from "../../../components/customs/Input/Input";

const Login = () => {
  const email = useRef();
  const password = useRef();
  // const [password, setPassword] = useState("");

  return (
    <LoginPage>
      <LoginContainer>
        <LoginHeader>
          <Text
            mode="span"
            fSize={50}
            fWeight={700}
            tSpacing={0}
            fColor="white"
          >
            Login
          </Text>
        </LoginHeader>
        <LoginBody>
          <FieldLineDiv>
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              Email:
            </Text>
            <Input
              type="text"
              ref={email}
              name="email"
              placeholder="admin@gmail.com"
            />
          </FieldLineDiv>
          <FieldLineDiv>
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              Password:
            </Text>
            <Input
              type="password"
              name="password"
              ref={password}
              placeholder="*********"
            />
          </FieldLineDiv>
          <FieldLineDiv>
            <LoginBtn>
              <Text mode="span" fSize={20} fWeight={400} tSpacing={0}>
                Login
              </Text>
            </LoginBtn>
          </FieldLineDiv>
        </LoginBody>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
