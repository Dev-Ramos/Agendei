import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TabNavigation from "./tabNavigation/TabNavigation.jsx"

const Stack = createNativeStackNavigator()

const RoutesPrivate = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="main" component={TabNavigation}/>
    </Stack.Navigator>
  )
}

export default RoutesPrivate
