import { Text, View } from "react-native"
import { styles } from "./calendar.style"
import { Calendar as Schedule, LocaleConfig } from "react-native-calendars"
import {ptBR} from '../../constants/calendar.js'
import { useState } from "react"
import { Picker } from "@react-native-picker/picker"
import Button from '../../components/button/button.jsx'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

const Calendar = () => {

  const [selected, setSelected] = useState(new Date().toISOString())
  const [selectedHour, setSelectedHour] = useState('')

  return (
    <View style={styles.container}>
      <View>
        <Schedule theme={styles.theme}
          onDayPress={(day) => {
            setSelected(day.dateString)
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
          <Button text='Confirmar Reserva'/>
        </View>
    </View>
  )
}

export default Calendar
