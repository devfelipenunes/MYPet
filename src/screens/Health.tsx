import { UserPhoto } from "@components/UserPhoto";
import { Center, Text, VStack, HStack, Box } from "native-base";

import Fred from "@assets/Fred.jpeg";

import { HealthComponent } from "@components/HealthComponent";

const PHOTO_SIZE = 200;

export function Health({ navigation }: any) {
  function handleWeight() {
    navigation.navigate("weight");
  }
  function handleExercises() {
    navigation.navigate("exercises");
  }
  function handleEconomy() {
    navigation.navigate("economy");
  }
  function handleVet() {
    navigation.navigate("vet");
  }

  return (
    <VStack flex={1}>
      <Box bg="red.500" h={200} marginBottom={140}>
        <Center mt={6} px={10}>
          <UserPhoto
            top={100}
            source={Fred}
            alt="Foto Perfil"
            size={PHOTO_SIZE}
          />
        </Center>
      </Box>
      <Center>
        <Text color="white" fontSize="4xl">
          Fred Fredrico
        </Text>
      </Center>

      <VStack padding={4} space={5} alignItems="center">
        <HStack space={5}>
          <HealthComponent title="Exercicio" onPress={handleExercises} />
          <HealthComponent title="Peso" onPress={handleWeight} />
        </HStack>
        <HStack space={5}>
          <HealthComponent title="Gastos" onPress={handleEconomy} />
          <HealthComponent title="Vet" onPress={handleVet} />
        </HStack>
      </VStack>
    </VStack>
  );
}
