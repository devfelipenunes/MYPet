import React, { useState, useEffect } from "react";
import { ButtonBack } from "@components/ButtonBack";
import { EconomyFuturePurchases } from "@components/EconomyFuturePurchases";
import { Box, VStack, Text, SectionList } from "native-base";
import { ButtonAdd } from "@components/ButtonAdd";
import { EconomyPurchases } from "@components/EconomyPurchases";

export function Economy({ navigation }: any) {
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

  function handleAddEconomy() {
    navigation.navigate("economyAdd");
  }

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 70,
        },
      });
    };
  }, []);

  return (
    <VStack flex={1}>
      <Box h={250} bg="blue.700" pt={5} mb={3}>
        <ButtonBack mt={10} ml={5} onPress={handleBack} />
        <VStack alignItems="center" mt={19}>
          <Text bold fontSize="4xl">
            R$ 2.500,00
          </Text>
          <Text>Agosto</Text>
        </VStack>
      </Box>
      <Box w={360} h={90} bg="blue.600" alignSelf="center"></Box>
      <SectionList
        mt={2}
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <EconomyFuturePurchases />}
        bg="yellow.400"
        maxH={180}
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
      <SectionList
        mt={2}
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <EconomyPurchases />}
        bg="yellow.400"
        maxH={200}
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
      <ButtonAdd onPress={handleAddEconomy} />
    </VStack>
  );
}
