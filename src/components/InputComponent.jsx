import { StyleSheet, Text, TextInput, View} from "react-native";

function InputComponent({
    textLabel,
    secureTextEntry,
    letterSpacing,
    setChange
    }) {
    const customStyleInput = [
        styles.Textinput,
        letterSpacing && styles.letterSpacing
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>{textLabel}</Text> 
            <TextInput
                onChange={(e)=> setChange(textLabel,e.nativeEvent.text)}
                secureTextEntry={secureTextEntry}
                style={customStyleInput} />
        </View>
     );
}
const styles = StyleSheet.create({
    Textinput:{
        width:'100%',
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        marginTop:10,
        fontSize:18,
        paddingBottom:10,
        color:'#fff'
    },
    container:{
        // backgroundColor:'blue',
        marginTop:25,
        marginBottom:5
    },
    textLabel:{
        color:'#fff',
        fontSize:12,
        textTransform:'capitalize'
    },
    letterSpacing:{
        letterSpacing:8
    }
})
export default InputComponent;