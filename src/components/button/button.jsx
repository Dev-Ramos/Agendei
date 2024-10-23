import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {

    function onPress() {
        props.action()
    }

    return <TouchableOpacity onPress={onPress} 
    style={[styles.btn, props.theme === 'danger' ? styles.danger : styles.primary]}>
        <Text style={styles.text}>
            {props.text}
        </Text>
    </TouchableOpacity>

}

export default Button;