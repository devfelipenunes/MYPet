import { Text, View, VStack } from "native-base";

import { MyPetsComponents } from "@components/MyPetsComponents";
import { ButtonAdd } from "@components/ButtonAdd";

export function MyPets({ navigation }: any) {
  function handlePet() {
    // navigation.navigate("home");
  }

  function handleAddPet() {
    // navigation.navigate("addPet");
  }

  return (
    <VStack flex={1} bg="black" alignItems="center">
      <Text color="white" mt="25%" fontSize="6xl" bold>
        My Pets
      </Text>
      <VStack justifyContent="space-between" flex={1} p={5}>
        <MyPetsComponents onPress={handlePet} />

        <ButtonAdd onPress={handleAddPet} />
      </VStack>
    </VStack>
  );
}
