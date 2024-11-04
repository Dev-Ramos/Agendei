import { Alert, FlatList, Text, View } from "react-native"
import {styles} from './appointments.style.js'
import Booking from "../../components/booking/Booking.jsx"
import { useEffect, useState } from "react"
import api from "../../constants/api.js"

const Appointments = () => {

  const [appointments, setAppointments] = useState([])

  const LoadAppointments = async()=>{
    try {
      const response = await api.get("/appointments")

      if(response.data)
        setAppointments(response.data)
      
    }catch (error) {
      if(error.response?.data.error)
        Alert.alert(error.response.data.error)
      else
        Alert.alert('Ocorreu um erro no servidor')
  }
  }

  const DeleteAppointment = async(id_appointment)=>{
    try {
      const response = await api.delete("/appointments/"+ id_appointment)

      if(response.data?.id_appointment)
        LoadAppointments()

    }catch (error) {
      if(error.response?.data.error)
        Alert.alert(error.response.data.error)
      else
        Alert.alert('Ocorreu um erro no servidor')
  }
  }

  useEffect(()=>{
    LoadAppointments()
  },[])

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={apt => apt.id_appointment}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>{
          return <Booking 
            id_appointment={item.id_appointment}
            doctor={item.doctor}
            specialty={item.specialty}
            booking_date={item.booking_date}
            booking_hour={item.booking_hour}
            service={item.service}
            onPress={DeleteAppointment}
          />
        }}
      />
    </View>
  )
}

export default Appointments
