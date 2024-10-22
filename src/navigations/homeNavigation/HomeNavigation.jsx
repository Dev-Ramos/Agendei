import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home/Home.jsx";
import Services from "../../screens/services/Services.jsx";
import { Text } from "react-native";


const Stack = createStackNavigator();
function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="services" component={Services} options={{
        headerStyle: {
          backgroundColor: '#0D6EFD',
          borderWidth: 0
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitle: ()=>{
          return <Text style={{fontSize: 20, fontWeight:'500', color: 'white'}}>Serviços</Text>
        },
       }}/>
    </Stack.Navigator>
  )
}
export default HomeNavigation