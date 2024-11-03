import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./account.style.js";
import Button from "../../components/button/button.jsx";
import { useNavigation } from "@react-navigation/native";

function Account() {
    const navigation = useNavigation()
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Nome" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true} />
            </View>
            <Button text="Criar Conta" />
        </View>

        <View style={styles.footer}>
            <Text>Já tenho conta. </Text>
            <TouchableOpacity onPress={()=>{navigation.push('login')}}>
                <Text style={styles.footerLink}>
                    Fazer login.
                </Text>
            </TouchableOpacity>
        </View>

    </View>
}

export default Account;