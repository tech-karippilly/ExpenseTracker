import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/HomeScreen";
import SplashScreen from "../../Screens/HomeScreen/SplashScreen/Index";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
    <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>)
}