import Routes from "./src/navigations/routes.js";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/auth.js";

function App() {

  return <NavigationContainer>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  </NavigationContainer> 
}

export default App;