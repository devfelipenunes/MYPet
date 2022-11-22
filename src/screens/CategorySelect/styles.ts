import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: blue;
`;
export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: blue;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;
export const Title = styled.Text`
  font-size: 18px;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: 15px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive }) => (isActive ? "blue" : "red")};
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-size: 14px;
`;

export const Seperator = styled.View`
  height: 1px;
  width: 100%;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
