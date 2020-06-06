import React from "react";
import { Image } from "react-native";
import { Container, Title } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

import logoImg from "../../assets/logo.png";

export default () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Password" />

      <Button>Entrar</Button>
    </Container>
  );
};
