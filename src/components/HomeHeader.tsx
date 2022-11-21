import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
  Text,
  VStack,
  HStack,
  Center,
  Box,
  Image,
  Button,
  IButtonProps,
} from "native-base";

import Fred from "@assets/Fred.jpeg";

export function HomeHeader({ navigation, ...rest }: IButtonProps) {
  function handleProfile() {
    navigation.navigate("profile");
  }

  return (
    <Button
      onPress={handleProfile}
      {...rest}
      w="100%"
      h={300}
      bg="white"
      marginTop={10}
      marginBottom={10}
      padding={0}
    >
      <Image
        source={Fred}
        h={300}
        w={450}
        alt="Foto Perfil"
        resizeMode="cover"
      />
      <HStack
        w={"100%"}
        bg="white"
        alignItems="center"
        h={10}
        space={20}
        justifyContent="center"
      >
        <VStack alignItems="center">
          <Text>2</Text>
          <Text>Anos</Text>
        </VStack>
        <VStack alignItems="center">
          <Text>1.5 kg</Text>
          <Text>Peso</Text>
        </VStack>
        <VStack alignItems="center">
          <Text>Sexo</Text>
          <Text>Macho</Text>
        </VStack>
      </HStack>
    </Button>
  );
}
