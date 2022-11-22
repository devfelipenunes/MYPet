import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ContainerProps {
  isActive: boolean;
  type: "compra" | "comprar";
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  align-items: center;
  justify-content: center;

  border: 1.5px solid;

  ${({ isActive, type }) =>
    isActive &&
    type === "compra" &&
    css`
      background-color: blue;
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "comprar" &&
    css`
      background-color: blue;
    `}
`;

export const Title = styled.Text``;
