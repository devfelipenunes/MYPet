import { Box, Button, Input, VStack } from "native-base";
import React, { useState } from "react";
import { Text } from "react-native";

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

import auth from "@react-native-firebase/auth";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "firabase-config";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("user: ", userCredential);
      });
    // signInWithEmailAndPassword(auth, email, password).then();
  };

  return (
    <VStack flex={1}>
      <Box bg="yellow.700" h={400}></Box>
      <VStack p={10}>
        <Input placeholder="E-mail" mb={5} onChangeText={setEmail} />
        <Input placeholder="Senha" mb={5} onChangeText={setPassword} />
        <Button>
          <Text>Login</Text>
        </Button>
      </VStack>
    </VStack>
  );
}
