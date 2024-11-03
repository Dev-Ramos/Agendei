import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from '../screens/login/login.jsx'
import Account from '../screens/account/account.jsx'

const Stack = createNativeStackNavigator()

const RoutesOpen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={Login}/>
      <Stack.Screen name="account" component={Account}/>
    </Stack.Navigator>
  )
}

export default RoutesOpen
