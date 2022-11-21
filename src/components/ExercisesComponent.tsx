import { Text, HStack, VStack, Box } from "native-base";

export function ExercisesComponent() {
  return (
    <HStack bg="green.700" h={100} w={350}  alignItems="center" space={10}  marginTop={15}
    rounded="md"
    ml={3}
    >
        <Box bg="blue.700" h={100} w={100}  ></Box>
      <VStack>
        <Text>15 de ago</Text>
        <Text fontSize='4xl' bold >1.200 Km</Text>
        <Text>12:00 - 12/11/2022</Text>
      </VStack>
      <Text>></Text>
    </HStack>
  );
}

