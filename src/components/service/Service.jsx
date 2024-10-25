import { Alert, Text, View } from "react-native"
import Button from '../button/button.jsx'
import { styles } from "./service.style.js"
import { useNavigation } from "@react-navigation/native"

const Service = (props) => {

  const navigation = useNavigation()
  const Action = ()=>{
    navigation.push('calendar', {
      description: props.description,
      price: props.price
    })
  }

  return (
    <View style={styles.service}>
      <View style={styles.containerText}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.price}>
          {
            new Intl.NumberFormat("pt-BR", {
              style: 'currency', currency: 'BRL'
             }).format(props.price)
          }</Text>
      </View>
      <Button text='Agendar' theme='primary' action={Action}/>
    </View>
  )
}

export default Service
