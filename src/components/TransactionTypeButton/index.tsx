import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type: "compra" | "comprar";
  isActive: boolean;
}

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <Container {...rest} type={type} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
}
