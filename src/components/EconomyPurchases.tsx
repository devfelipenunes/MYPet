import { Text, HStack, VStack } from "native-base";

export function EconomyPurchases() {
  return (
    <HStack
      bg="blue.700"
      h={90}
      w={"90%"}
      p={5}
      alignSelf="center"
      space={10}
      rounded="md"
      mt={2}
    >
      <Text>ICON</Text>
      <VStack justifyContent="center">
        <Text fontSize="xl">Ração</Text>
        <Text bold fontSize="4xl">
          R$ 290,00
        </Text>
      </VStack>
    </HStack>
  );
}
