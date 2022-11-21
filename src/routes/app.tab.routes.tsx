import { useTheme } from "native-base";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/home.svg";
import HealthSvg from "@assets/health.svg";
import SettingSvg from "@assets/setting.svg";

import { Health } from "@screens/Health";
import { Setting } from "@screens/Setting";

import { AppStackRoutes } from "@routes/app.stack.routes";

type AppRoutes = {
  home: undefined;
  setting: undefined;
  health: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const { sizes, colors } = useTheme();
  const iconSize = sizes[8];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[500],
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 70,
        },
      }}
    >
      <Screen
        name="inicio"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="health"
        component={Health}
        options={{
          tabBarIcon: ({ color }) => (
            <HealthSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color }) => (
            <SettingSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
    </Navigator>
  );
}
