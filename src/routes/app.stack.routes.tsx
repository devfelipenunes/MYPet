import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Exercises } from "@screens/Exercises";
import { ExercisesAdd } from "@screens/ExercisesAdd";
import { Home } from "@screens/Home";
import { Weight } from "@screens/Weight";
import { Profile } from "@screens/Profile";
import { Vet } from "@screens/Vet";
import { Economy } from "@screens/Economy";
import { EconomyAdd } from "@screens/EconomyAdd";
import { MyPets } from "@screens/MyPets";
import { AddPet } from "@screens/AddPet";

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="exercises" component={Exercises} />
      <Screen name="exercisesAdd" component={ExercisesAdd} />
      <Screen name="weight" component={Weight} />
      <Screen name="profile" component={Profile} />
      <Screen name="vet" component={Vet} />
      <Screen name="economy" component={Economy} />
      <Screen name="economyAdd" component={EconomyAdd} />
      <Screen name="myPets" component={MyPets} />
      <Screen name="addPet" component={AddPet} />
    </Navigator>
  );
}
