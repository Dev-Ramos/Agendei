import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../home/Home.jsx'
import Appointments from '../appointments/Appointments.jsx'
import Profile from "../profile/Profile.jsx"
import icon from "../../constants/icon.js"
import { styles } from "./main.style.js"
import { Image, Text } from "react-native"

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          headerTitleAlign: 'center',
          headerTitle: ()=>{
            return <Image source={icon.logo} 
              style={{width: 125, height: 29}}/>
          },
          tabBarShowLabel: false,
          tabBarIcon: ({focused})=>{
            return <Image source={icon.home} 
            style={{
              width:30, 
              height:30,
              opacity: focused ? 1 : 0.3
            }}/>
          }
        }}/>
        <Tab.Screen name="Appointments" component={Appointments} options={{
          headerTitleAlign: 'center',
          headerTitle: ()=>{
            return <Text style={styles.title}>Minhas Reservas</Text>
          },
          tabBarShowLabel: false,
          tabBarIcon: ({focused})=>{
            return <Image source={icon.calendar} 
            style={{
              width:30, 
              height:30,
              opacity: focused ? 1 : 0.3
            }}/>
          }
        }}/>
        <Tab.Screen name="profile" component={Profile} options={{
          headerTitleAlign: 'center',
          headerTitle: ()=>{
            return <Text style={styles.title}>Meu Perfil</Text>
          },
          tabBarShowLabel: false,
          tabBarIcon: ({focused})=>{
            return <Image source={icon.profile} 
            style={{
              width:30, 
              height:30,
              opacity: focused ? 1 : 0.3
            }}/>
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default Main
