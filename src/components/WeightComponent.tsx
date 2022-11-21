import { Text, HStack, VStack, Box, Center } from "native-base";

interface Props {
  peso: string;
}

export function WeightComponent({ peso }: Props) {
  return (
    <HStack
      bg="green.700"
      w={350}
      alignItems="center"
      marginTop={"2%"}
      rounded="md"
    >
      <Box w={100} justifyContent="center" alignItems="center">
        <Text bold fontSize="6xl">
          {peso}
        </Text>
      </Box>

      <HStack marginLeft={2} space={10}>
        <VStack>
          <Text fontSize="4xl" bold>
            Kg
          </Text>
          <Text fontSize="xl">12/11/2022</Text>
        </VStack>
      </HStack>
    </HStack>
  );
}
