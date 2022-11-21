import { useEffect } from "react";
import { UserPhoto } from "@components/UserPhoto";
import { Box, Button, Input, Text, VStack } from "native-base";

import Fred from "@assets/Fred.jpeg";
import { ButtonBack } from "@components/ButtonBack";

export function Profile({ navigation }: any) {
  function handleBack() {
    navigation.goBack();
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
    <VStack alignItems="center">
      <Box>
        <ButtonBack marginTop={12} right={12} onPress={handleBack} />
        <UserPhoto marginTop={100} source={Fred} alt="Foto Perfil" size={200} />
      </Box>
      <VStack mb={5} mt={10} w={"90%"} space={5}>
        <Input placeholder="Nome" />
        <Input placeholder="Especie" />
        <Input placeholder="Idade" />
        <Input placeholder="Sexo" />
        <Input placeholder="Raça" />
      </VStack>
      <Button bg="white">
        <Text>Confirmar</Text>
      </Button>
    </VStack>
  );
}
