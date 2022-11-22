import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useTheme } from "native-base";

import { AuthRoutes } from "./auth.routes";
import { AppTabRoutes } from "./app.tab.routes";
import { useAuth } from "@hooks/auth";

export function Routes() {
  const { colors } = useTheme();

  const { user } = useAuth();
  // console.log(user);
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <NavigationContainer theme={theme}>
      {/* {user.id ? <AuthRoutes /> : <AppTabRoutes />} */}
      <AppTabRoutes />
    </NavigationContainer>
  );
}
