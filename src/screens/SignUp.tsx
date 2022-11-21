import { Box, Button, Input, VStack } from "native-base";
import React, { useState } from "react";
import { Text } from "react-native";

import auth from "@react-native-firebase/auth";

import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "firabase-config";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const app = initializeApp(firebaseConfig);

  const handleCreateAccount = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("user: ", userCredential);
      });
  };

  return (
    <VStack flex={1}>
      <Box bg="yellow.700" h={400}></Box>
      <VStack p={10}>
        <Input
          placeholder="E-mail"
          mb={5}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Senha"
          mb={5}
          value={password}
          onChangeText={setPassword}
        />
        <Button onPress={handleCreateAccount}>
          <Text>Cadastrar</Text>
        </Button>
      </VStack>
    </VStack>
  );
}
