import { Image, Text, View } from "react-native"
import icon from "../../constants/icon.js"
import Button from "../button/button.jsx"
import { style } from "./booking.style.js"

const Booking = (props) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{props.service} - {props.doctor}</Text>
      <Text style={style.text}>{props.specialty}</Text>
      <View style={style.container2}>
        <View>
          <View style={style.infos}>
            <Image source={icon.calendar} style={style.icon}/>
            <Text style={style.text}>{props.booking_date}</Text>
          </View>
          <View style={style.infos}>
            <Image source={icon.clock} style={style.icon}/>
            <Text style={style.text}>{props.booking_hour}h</Text>
          </View>
        </View>
        <Button text='Cancelar Reserva' theme='danger'/>
      </View>
    </View>
  )
}

export default Booking
