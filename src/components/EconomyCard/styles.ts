import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface TransactionProps {
  type: "compra" | "comprar";
}

export const Container = styled.View`
  background: yellow;
  border-radius: 5px;

  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 14px;
`;
export const Amount = styled.Text<TransactionProps>`
  font-size: 20px;
  color: ${({ theme, type }) => (type === "compra" ? "green" : "red")};
  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;
export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled(Feather)`
  font-size: 20px;
`;
export const CategoryName = styled.Text`
  font-size: 14px;

  margin-left: 17px;
`;
export const Date = styled.Text`
  font-size: 14px;
`;
