import { Text, HStack, VStack, Box, IButtonProps, Button } from "native-base";

interface Prop extends IButtonProps {
  title: string;
}

export function HealthComponent({ title, ...rest }: Prop) {
  return (
    <Button {...rest} bg="blue.700" h={150} w={150}>
      <Text>{title}</Text>
    </Button>
  );
}
