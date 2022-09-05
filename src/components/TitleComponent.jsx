import { Text } from "react-native";

function TitleComponent({textContent}) {
    return ( <Text style={defaultStyles.titleStyle}>
        {textContent}
    </Text> );
}

const defaultStyles = {
    titleStyle:{
    width:'100%',
    color:'#fff',
    fontWeight:'bold',
    fontSize:40
    }
}
export default TitleComponent;