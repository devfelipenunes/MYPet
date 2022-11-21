import { Spinner, Center } from "native-base";

export function Loading() {
  return (
    <Center bg="info.400">
      <Spinner />
    </Center>
  );
}
