import { Image, TouchableOpacity, View, Text } from "react-native"
import { styles } from "./doctor.style"
import { useNavigation } from "@react-navigation/native"
import icon from "../../constants/icon"

const Doctor = (props) => {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity style={styles.doctor} onPress={()=>navigation.push('services', {
      id_doctor: props.id_doctor,
      name: props.name,
      specialty: props.specialty,
      icon: props.icon
    })}>
      <Image source={props.icon === 'M' ? icon.male : icon.female} style={styles.icon}/>
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.speciality}>{props.specialty}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Doctor
