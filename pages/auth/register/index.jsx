import React, { useState, useRef } from "react";
import {
  FieldLineDiv,
  RegisterBody,
  RegisterBtn,
  RegisterContainer,
  RegisterHeader,
  RegisterPage,
} from "./styles";
import Text from "../../../components/customs/Text";
import Input from "../../../components/customs/Input/Input";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordconfirm = useRef();
  // const [password, setPassword] = useState("");

  return (
    <RegisterPage>
      <RegisterContainer>
        <RegisterHeader>
          <Text
            mode="span"
            fSize={50}
            fWeight={700}
            tSpacing={0}
            fColor="white"
          >
            Register
          </Text>
        </RegisterHeader>
        <RegisterBody>
          <FieldLineDiv>
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              Username:
            </Text>
            <Input
              type="text"
              ref={username}
              name="username"
              placeholder="Andrei Yegor"
            />
          </FieldLineDiv>

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
            <Text fSize={20} fWeight={400} tSpacing={0} fColor="white">
              Email:
            </Text>
            <Input
              type="password"
              ref={passwordconfirm}
              name="passwordconfirm"
              placeholder="*********"
            />
          </FieldLineDiv>
          <FieldLineDiv>
            <RegisterBtn>
              <Text mode="span" fSize={20} fWeight={400} tSpacing={0}>
                Register
              </Text>
            </RegisterBtn>
          </FieldLineDiv>
        </RegisterBody>
      </RegisterContainer>
    </RegisterPage>
  );
};

export default Register;
