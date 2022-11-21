import { Box, Text, VStack, IButtonProps, Button } from "native-base";

export function MyPetsComponents({ ...rest }: IButtonProps) {
  return (
    <Button
      {...rest}
      w={333}
      h={300}
      bg="gray.700"
      mt={5}
      borderRadius={10}
      p={5}
      justifyContent="space-between"
    >
      <VStack>
        <Text color="white">Yorkshare Terrier</Text>
        <Text color="white" fontSize="4xl" bold>
          Frederico
        </Text>
      </VStack>
      <VStack>
        <Text color="white" fontSize="4xl">
          1
        </Text>
        <Text color="white" bold>
          ANO
        </Text>
      </VStack>
    </Button>
  );
}
