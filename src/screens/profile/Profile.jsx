import { Text, View } from "react-native"
import { styles } from "./profile.style.js"

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.tipoInfo}>Nome:</Text>
        <Text style={styles.info}>Lucas Ramos</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.tipoInfo}>E-mail:</Text>
        <Text style={styles.info}>lucaxiTeste@test.com</Text>
      </View>
    </View>
  )
}

export default Profile
