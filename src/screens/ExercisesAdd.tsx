import { ButtonBack } from "@components/ButtonBack";
import { Box, Center, HStack, Text, VStack, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

export function ExercisesAdd({ navigation }: any) {
  function handleBack() {
    navigation.goBack();
    console.log("click");
  }

  return (
    <VStack flex={1}>
      <Box bg="green.700" h={640}>
        <Box top={20} left={10}>
          <ButtonBack onPress={handleBack} />
        </Box>
      </Box>
      <HStack
        justifyContent="center"
        space={100}
        marginTop={2}
        marginBottom={5}
      >
        <VStack>
          <Center>
            <Text fontSize="5xl" bold color="white">
              2.4
            </Text>
            <Text bold color="white">
              Distancia (KM)
            </Text>
          </Center>
        </VStack>
        <VStack>
          <Center>
            <Text fontSize="5xl" bold color="white">
              2.4
            </Text>
            <Text bold color="white">
              Duração
            </Text>
          </Center>
        </VStack>
      </HStack>
      <Center>
        <Button h={70} w={300}>
          <Center>
            <Text bold fontSize="4xl" color="white">
              Start
            </Text>
          </Center>
        </Button>
      </Center>
    </VStack>
  );
}
