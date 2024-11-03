import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./services.style.js"
import { doctors_services } from "../../constants/data.js"
import icon from '../../constants/icon.js'
import Service from "../../components/service/Service.jsx"
import { useRoute } from "@react-navigation/native"

const Services = (props) => {
  const params = useRoute().params
  const id_doctor = params.id_doctor

  const ClickService = (id_service)=>{
    props.navigation.navigate('calendar', {
      id_service,
      id_doctor
    })
  }

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
          return <Service 
          id_service={item.id_service} 
          price={item.price} 
          description={item.description}
          onPress={ClickService}/>
        }}
      /> 
    </View>
  )
}

export default Services
