import { FlatList, Text, View } from "react-native"
import {styles} from './appointments.style.js'
import {appointments} from "../../constants/data.js"
import icon from '../../constants/icon.js'
import Booking from "../../components/booking/Booking.jsx"
const Appointments = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={apt => apt.id_appointment}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>{
          return <Booking 
            doctor={item.doctor}
            specialty={item.specialty}
            booking_date={item.booking_date}
            booking_hour={item.booking_hour}
            service={item.service}
          />
        }}
      />
    </View>
  )
}

export default Appointments
