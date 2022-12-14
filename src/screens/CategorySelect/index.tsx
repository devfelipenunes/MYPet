import React from "react";
import { FlatList, Text } from "react-native";
import { categories } from "../../utils/categories";
import { Button } from "native-base";

import {
  Container,
  Header,
  Title,
  Icon,
  Name,
  Category,
  Seperator,
  Footer,
} from "./styles";

export interface Category {
  key: string;
  name: string;
}

export interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Seperator />}
      />
      <Footer>
        <Button onPress={closeSelectCategory}>
          <Text>Aducu</Text>
        </Button>
      </Footer>
    </Container>
  );
}
