import { Text, HStack, VStack } from "native-base";

export function AgendaComponent() {
  return (
    <HStack bg="gray.700" h={70} w={220} p={2}alignItems="center"  justifyContent="space-between"   
    rounded="md"
    ml={3}
    >
      <Text fontSize="5xl">?</Text>
      <VStack>
        <Text>PetShop</Text>
        <Text>12:00 - 12/11/2022</Text>
      </VStack>
      <Text>></Text>
    </HStack>
  );
}
