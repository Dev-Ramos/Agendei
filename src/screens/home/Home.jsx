import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./home.style"
import Doctor from "../../components/doctor/Doctor.jsx"
import icon from '../../constants/icon.js'
import api from "../../constants/api.js"
import { useEffect, useState } from "react"

const Home = () => {
  const [doctors, setDoctors] = useState([])

  const LoadDoctors = async()=>{
    try {
      const response = await api.get("/doctors/")

      if(response.data)
        setDoctors(response.data)
    }catch (error) {
      if(error.response?.data.error)
        Alert.alert(error.response.data.error)
      else
        Alert.alert('Ocorreu um erro no servidor')
  }
  }

  useEffect(()=>{
    LoadDoctors()
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={icon.logo} style={{height: 30, width: 125}}/>
      </View>
      <Text style={styles.text}>Agende os seus serviços médicos</Text>
      <FlatList 
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <Doctor 
            id_doctor={item.id_doctor}
            name={item.name} 
            icon={item.icon}
            specialty={item.specialty}/>
        }}
      /> 
    </View>
  )
}

export default Home
