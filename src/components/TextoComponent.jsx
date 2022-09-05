import { StyleSheet, Text } from "react-native";

function TextoComponent({textContent,whiteText='#fff'}) {
    const customStyles= StyleSheet.flatten([
        defaultStyles.textStyles,{color:whiteText}])
    return ( <Text style={customStyles}>
        {textContent}
    </Text> );
}
const defaultStyles =StyleSheet.create({
    textStyles:{
        color:'#000000',
        marginTop:5,
        fontSize:18,
        // lineHeight:0,
        fontWeight:'500',
        marginBottom:5,
    }
})
export default TextoComponent;