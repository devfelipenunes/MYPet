import { Center, Text, VStack, HStack, SectionList, Input } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ExercisesComponent } from "@components/ExercisesComponent";
import { useState, useEffect } from "react";
import { ButtonAdd } from "@components/ButtonAdd";
import { ButtonBack } from "@components/ButtonBack";

export function Exercises({ navigation }: any) {
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

  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
    {
      title: "26.08.22",
      data: ["puxada", "remada"],
    },
  ]);

  function handleBack() {
    navigation.goBack();
  }
  function handleAddExercise() {
    navigation.navigate("exercisesAdd");
  }

  return (
    <VStack flex={1}>
      <VStack bg="green.700" h={336}>
        <ButtonBack top={60} left={5} onPress={handleBack} />
        <VStack>
          <Center>
            <VStack mt={50} marginBottom={70}>
              <Text color="white" fontSize="6xl" bold>
                10.000
              </Text>
              <Text color="white" fontSize="xl" bold>
                Distancia Total (Km)
              </Text>
            </VStack>
            <HStack space={150}>
              <Text>? 20:40 MIN</Text>
              <Text>? 20:40 MIN</Text>
            </HStack>
          </Center>
        </VStack>
      </VStack>

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ExercisesComponent />}
        px={1}
        contentContainerStyle={
          [].length && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda.{"/n"}Vamos fazer exercicio hoje
            ?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />

      <ButtonAdd onPress={handleAddExercise} />
    </VStack>
  );
}
