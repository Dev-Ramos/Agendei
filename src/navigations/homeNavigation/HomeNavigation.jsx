import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home/Home.jsx";
import Services from "../../screens/services/Services.jsx";
import Calendar from '../../screens/calendar/Calendar.jsx'
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
      <Stack.Screen name="calendar" component={Calendar} options={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 1,
          borderColor: '#f1f5f4'
        },
        headerTintColor: '#0D6EFD',
        headerTitleAlign: 'center',
        headerTitle: ()=>{
          return <Text style={{fontSize: 20, fontWeight:'600', color: '#0D6EFD'}}>Fazer uma reserva</Text>
        },
       }}/>
    </Stack.Navigator>
  )
}
export default HomeNavigation