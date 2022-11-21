import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useTheme } from "native-base";

import { AuthRoutes } from "./auth.routes";
import { AppTabRoutes } from "./app.tab.routes";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

export function Routes() {
  const { colors } = useTheme();

  const user = false;

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <NavigationContainer theme={theme}>
      <AppTabRoutes />
    </NavigationContainer>
  );
}
