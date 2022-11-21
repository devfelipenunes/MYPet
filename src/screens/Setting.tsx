import { ButtonBack } from "@components/ButtonBack";
import { Button, Center, Text, VStack } from "native-base";

export function Setting() {
  const SIZE = 40;

  return (
    <VStack flex={1}>
      <ButtonBack marginTop={12} left={5} />
      <VStack alignItems="center" space={10} marginTop={100}>
        <Button width="80%">
          <Text fontSize={SIZE}>Perfil</Text>
        </Button>

        <Button width="80%">
          <Text fontSize={SIZE}>Notificações</Text>
        </Button>

        <Button width="80%">
          <Text fontSize={SIZE}>MyPets</Text>
        </Button>

        <Button width="80%">
          <Text fontSize={SIZE}>Minha Conta</Text>
        </Button>
      </VStack>
    </VStack>
  );
}
