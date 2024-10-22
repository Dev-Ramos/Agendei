import { FlatList, Text, View } from "react-native"
import { styles } from "./home.style"
import {doctors} from "../../constants/data.js"
import Doctor from "../../components/doctor/Doctor.jsx"
import icon from '../../constants/icon.js'
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende os seus serviços médicos</Text>
      
      <FlatList 
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <Doctor name={item.name} 
            icon={item.icon}
            specialty={item.specialty}/>
        }}
      /> 
    </View>
  )
}

export default Home
