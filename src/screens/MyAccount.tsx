import { Input, VStack } from "native-base";

export function MyAccount() {
  return (
    <VStack>
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha Antiga" />
      <Input placeholder="Senha Nova" />
      <Input placeholder="Repetir Senha Nova" />
    </VStack>
  );
}
