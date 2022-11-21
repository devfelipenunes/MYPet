import { Box, Button, Center, IButtonProps } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export function ButtonBack({ ...rest }: IButtonProps) {
  return (
    <Button w={50} h={50} {...rest} bg="white">
      <AntDesign name="left" size={24} color="black" />
    </Button>
  );
}
