import { useState } from "react";
import { ButtonBack } from "@components/ButtonBack";
import { EconomyAddCategory } from "@components/EconomyAddCategory";
import { VStack, Text, Input, SectionList } from "native-base";

export function EconomyAdd({ navigation }: any) {
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
  ]);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <VStack
      flex={1}
      alignItems="center"
      pt={"20%"}
      py={"15%"}
      px={"5%"}
      space={"5%"}
    >
      <ButtonBack alignSelf="flex-start" onPress={handleBack} />
      <Input placeholder="name" />
      <SectionList
        mt={2}
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <EconomyAddCategory />}
        maxH={100}
        horizontal
        contentContainerStyle={
          [].length && {
            flex: 1,
            justifyContent: "center",
          }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda.{"/n"}Vamos fazer exercicio hoje
            ?
          </Text>
        )}
        showsHorizontalScrollIndicator={false}
      />
      <Input placeholder="Valor" />
      <Input placeholder="name" />
      <Input placeholder="Descrição" />
    </VStack>
  );
}
