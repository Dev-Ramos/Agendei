import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./services.style.js"
import { doctors_services } from "../../constants/data.js"
import icon from '../../constants/icon.js'
import Service from "../../components/service/Service.jsx"
import { useRoute } from "@react-navigation/native"
const Services = () => {
  const params = useRoute().params
  
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={params.icon === 'M' ? icon.male : icon.female}/>
        <Text style={styles.name}>{params.name}</Text>
        <Text style={styles.specealty}>{params.specialty}</Text>
      </View>
      
      <FlatList 
        data={doctors_services}
        keyExtractor={(serv) => serv.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <Service price={item.price} description={item.description}/>
        }}
      /> 
    </View>
  )
}

export default Services
