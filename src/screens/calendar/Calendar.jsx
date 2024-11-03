import { Alert, Text, View } from "react-native"
import { styles } from "./calendar.style"
import { Calendar as Schedule, LocaleConfig } from "react-native-calendars"
import {ptBR} from '../../constants/calendar.js'
import { useState } from "react"
import { Picker } from "@react-native-picker/picker"
import Button from '../../components/button/button.jsx'
import { useNavigation, useRoute } from "@react-navigation/native"
import api from "../../constants/api.js"

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

const Calendar = (props) => {
  const params = useRoute().params
  const navigation = useNavigation()
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10))
  const [selectedHour, setSelectedHour] = useState('09:00')

  // const Action = ()=>{
  //   console.log(`Serviço: ${params.id_service}\n Data: ${selected}\n Horário: ${selectedHour}\n doutor: ${params.id_doctor}`)
  //   navigation.navigate('home')
  // }

  const ClickBooking = async()=>{
    try {
      const response = await api.post("/appointments", {
        id_doctor: params.id_doctor,
        id_service: params.id_service,
        booking_date: selectedDate,
        booking_hour: selectedHour
      })

      if(response.data?.id_appointment)
        props.navigation.popToTop()
      
    }catch (error) {
      if(error.response?.data.error)
        Alert.alert(error.response.data.error)
      else
        Alert.alert('Ocorreu um erro no servidor')
  }
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Schedule theme={styles.theme}
          onDayPress={(day) => {
            setSelectedDate(day.dateString)
          }}
          markedDates={{
            [selected]: {selected: true}
          }}
          minDate={new Date().toDateString()}
          />

          <View>
            <Text style={styles.textHour}>Horário:</Text>
            <Picker selectedValue={selectedHour}
              onValueChange={(itemValue, itemIndex)=> {
                setSelectedHour(itemValue)
              }}>
              <Picker.Item label="09:00" value='09:00'/>
              <Picker.Item label="09:30" value='09:30'/>
              <Picker.Item label="10:00" value='10:00'/>
              <Picker.Item label="10:30" value='10:30'/>
            </Picker>
          </View>
      </View>

        <View>
          <Button text='Confirmar Reserva' action={ClickBooking}/>
        </View>
    </View>
  )
}

export default Calendar
