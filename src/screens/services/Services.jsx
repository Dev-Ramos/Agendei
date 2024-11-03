import { Alert, FlatList, Image, Text, View } from "react-native"
import { styles } from "./services.style.js"
import { doctors_services } from "../../constants/data.js"
import icon from '../../constants/icon.js'
import Service from "../../components/service/Service.jsx"
import { useRoute } from "@react-navigation/native"
import api from "../../constants/api.js"
import { useEffect, useState } from "react"

const Services = (props) => {
  const params = useRoute().params
  const [doctorServices, setDoctorServices] = useState([])
  const id_doctor = params.id_doctor

  const ClickService = (id_service)=>{
    props.navigation.navigate('calendar', {
      id_service,
      id_doctor
    })
  }

  const LoadServices = async()=>{
    try {
      const response = await api.get("/doctors/" +id_doctor+ "/services")

      if(response.data)
        setDoctorServices(response.data)
    }catch (error) {
      if(error.response?.data.error)
        Alert.alert(error.response.data.error)
      else
        Alert.alert('Ocorreu um erro no servidor')
  }
  }

  useEffect(()=>{
    LoadServices()
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={params.icon === 'M' ? icon.male : icon.female}/>
        <Text style={styles.name}>{params.name}</Text>
        <Text style={styles.specealty}>{params.specialty}</Text>
      </View>
      
      {doctorServices ? <FlatList 
        data={doctorServices}
        keyExtractor={(serv) => serv.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <Service 
          id_service={item.id_service} 
          price={item.price} 
          description={item.description}
          onPress={ClickService}/>
        }}
      /> :
      <Text>Nenhum serviço cadastrado</Text>}
       
    </View>
  )
}

export default Services
