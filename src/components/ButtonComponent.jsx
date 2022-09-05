import { StyleSheet, Text, TouchableOpacity } from "react-native";
const styles = StyleSheet.create({
    viewBtn:{
        padding:15,
        marginTop:10,
        width:'100%',
        borderStyle:'solid',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:100,
        color:'#fff',
        alignItems:'center',
        // backgroundColor:'blue'
    },
    textContent:{
        color:'#fff',
        fontWeight:'600'
    },
    // FillColor
    fillColorBg:{
        backgroundColor:'#fff'
    },
    changeColorForFill:{
        color:'#3DD598'
    }
})
function ButtonComponent({funtionToAction,fillColor,textContent}) {
    const customStylesContainer =[styles.viewBtn,fillColor && styles.fillColorBg]
    const customStylesText = [styles.textContent,fillColor && styles.changeColorForFill]
    return ( <>
    <TouchableOpacity
        onPress={()=> funtionToAction()}
        style={customStylesContainer}>
        <Text style={customStylesText}>
            {textContent}
        </Text>
    </TouchableOpacity>
    </> );
}

export default ButtonComponent;