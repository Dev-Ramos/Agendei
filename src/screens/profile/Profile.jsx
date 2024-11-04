import { Alert, Text, View } from "react-native"
import { styles } from "./profile.style.js"
import Button from '../../components/button/button.jsx'
import { useContext, useEffect, useState } from "react"
import api from "../../constants/api.js"
import {AuthContext} from '../../contexts/auth.js'

const Profile = () => {
  const {setUser} = useContext(AuthContext)
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const LoadProfile = async()=>{
    try {
      const response = await api.get("/users/profile")

      if(response.data?.name){
        setName(response.data.name)
        setEmail(response.data.email)
      }
      
    }catch (error) {
      if(error.response?.data.error)
        Alert.alert(error.response.data.error)
      else
        Alert.alert('Ocorreu um erro no servidor')
  }
  }

  useEffect(()=>{
    LoadProfile()
  },[])

  function Logout(){
    api.defaults.headers.common["Authorization"]=""
    setUser({})
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.tipoInfo}>Nome:</Text>
        <Text style={styles.info}>{name}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.tipoInfo}>E-mail:</Text>
        <Text style={styles.info}>{email}</Text>
      </View>
      <Button text="Desconectar" theme='danger' action={Logout}/>
    </View>
  )
}

export default Profile
