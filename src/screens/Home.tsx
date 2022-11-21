import { useState } from "react";
import {
  Center,
  Text,
  VStack,
  Box,
  Image,
  HStack,
  SectionList,
  Heading,
  Button,
  StatusBar,
} from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { AgendaComponent } from "@components/AgendaComponent";

import Fred from "@assets/Fred.jpeg";

export function Home({ navigation }: any) {
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
  ]);

  function handleProfile() {
    navigation.navigate("profile");
  }

  return (
    <VStack flex={1} bg="red.500" alignItems="center">
      <StatusBar />
      <HomeHeader onPress={handleProfile} />

      <Box bg="gray.700" w={350} h={100} m={4}>
        <Center alignItems="center">
          <Text>Propagrada</Text>
        </Center>
      </Box>

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <AgendaComponent />}
        px={1}
        horizontal={true}
        contentContainerStyle={
          [].length && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda.{"/n"}Vamos fazer exercicio hoje
            ?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
