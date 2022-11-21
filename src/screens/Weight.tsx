import React, { useEffect, useState } from "react";
import { ButtonBack } from "@components/ButtonBack";
import {
  Center,
  HStack,
  Input,
  SectionList,
  VStack,
  Text,
  FlatList,
} from "native-base";
import { WeightComponent } from "@components/WeightComponent";
import { ButtonAdd } from "@components/ButtonAdd";

export function Weight({ navigation }: any) {
  const [petWeight, setPetWeight] = useState([]);
  const [newPetWeight, setNewPetWeight] = useState("");

  function handleAddWeight() {
    setPetWeight([...petWeight, newPetWeight]);
    setNewPetWeight("");
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

  function handleBack() {
    navigation.goBack();
  }

  console.log(petWeight);
  return (
    <VStack flex={1} alignItems="center" pt={"15%"} px={"5%"}>
      <ButtonBack onPress={handleBack} alignSelf="flex-start" mb={5} />
      <Center h={350} w={"100%"} bg="red.700"></Center>

      <FlatList
        data={petWeight}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <WeightComponent peso={item} />}
      />

      <HStack h={50} mt={5} mb={5} w="100%">
        <Input
          placeholder="Peso"
          w={"80%"}
          onChangeText={setNewPetWeight}
          value={newPetWeight}
        />
        <ButtonAdd onPress={handleAddWeight} />
      </HStack>
    </VStack>
  );
}
