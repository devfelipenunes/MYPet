import { Button, IButtonProps, Text, Center } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export function ButtonAdd({ ...rest }: IButtonProps) {
  return (
    <Center margin={5}>
      <Button
        w={50}
        h={50}
        bg={"green.700"}
        borderColor="green.500"
        rounded="sm"
        {...rest}
      >
        <AntDesign name="plus" size={24} color="white" />
      </Button>
    </Center>
  );
}
