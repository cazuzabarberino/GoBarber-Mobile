import React from "react";
import { Image } from "react-native";
import { Container } from "./styles";

import logoImg from '../../assets/logo.png'

export default () => {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
};
