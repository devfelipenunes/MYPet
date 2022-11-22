import React, { useState, useEffect, useCallback } from "react";
import { ButtonBack } from "@components/ButtonBack";
import { Box, VStack, Text, SectionList, FlatList } from "native-base";
import { ButtonAdd } from "@components/ButtonAdd";
import { TransactionCard, TransactionCardProps } from "@components/EconomyCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { useFocusEffect } from "@react-navigation/native";
export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Economy({ navigation }: any) {
  const [data, setData] = useState<DataListProps[]>([]);
  const [dataCompra, setDataCompra] = useState<DataListProps[]>([]);
  const [dataComprar, setDataComprar] = useState<DataListProps[]>([]);

  async function loadTransactions() {
    const dataKey = "@MYPets:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        // const date = Intl.DateTimeFormat("pt-BR", {
        //   day: "2-digit",
        //   month: "2-digit",
        //   year: "2-digit",
        // }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          // type: item.type,
          type: item.type,

          category: item.category,
          // date,
        };
      }
    );

    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

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

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

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
      <Box h={200} w={"full"} p={2} m={1} bg="yellow.200" alignSelf="center">
        <FlatList<DataListProps>
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Box>
      <Box h={200} w={"full"} p={2} m={1} bg="yellow.200" alignSelf="center">
        <FlatList<DataListProps>
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Box>

      <ButtonAdd onPress={handleAddEconomy} />
    </VStack>
  );
}
