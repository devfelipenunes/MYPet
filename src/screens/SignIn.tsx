import { Box, Button, Input, VStack } from "native-base";
import React, { useState, useContext } from "react";
import { Text, Alert } from "react-native";

import { useAuth } from "@hooks/auth";

export function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta google");
    }
  }

  return (
    <VStack flex={1}>
      <Box bg="yellow.700" h={400}></Box>
      <VStack p={10}>
        <Input placeholder="E-mail" mb={5} />
        <Input placeholder="Senha" mb={5} />
        <Button onPress={handleSignInWithGoogle}>
          <Text>Login</Text>
        </Button>
      </VStack>
    </VStack>
  );
}
