import { View } from "react-native"
import RoutesPrivate from "./routesPrivate"
import RoutesOpen from "./routesOpen"

const Routes = () => {

  const user = {
    id_user: 1
  }
  return user.id_user ? <RoutesPrivate/> : <RoutesOpen/>
}

export default Routes
