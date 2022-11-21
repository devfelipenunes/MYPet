import { Box, Button, Input, Text, VStack } from "native-base";

import { UserPhoto } from "@components/UserPhoto";

import Fred from "@assets/Fred.jpeg";

const PHOTO_SIZE = 200;

export function AddPet({ navigation }: any) {
  function handleAddPet() {
    // navigation.navigate("myPets");
  }

  return (
    <VStack alignItems="center">
      <Box bg="green.700" h={350} w={"full"} alignItems="center">
        <UserPhoto
          top={100}
          source={Fred}
          alt="Foto Perfil"
          size={PHOTO_SIZE}
        />
      </Box>

      <VStack p={5}>
        <Input w="full" placeholder="Nome" />
        <Input w="full" />
        <Input w="full" placeholder="Raça" />
        <Input w="full" placeholder="Peso" />
      </VStack>

      <Button bg="gray.400" onPress={handleAddPet}>
        <Text>Cadastrar</Text>
      </Button>
    </VStack>
  );
}
