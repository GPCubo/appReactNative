import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useRoute } from '@react-navigation/native';
import { listNavbar } from "../lists/listNavbar";

const styles = StyleSheet.create({
    containerMenu:{
        position:'absolute',
        bottom:0,
        backgroundColor:'#fff',
        width:'100%',
        height:'12%',
        flexDirection:'row',
        paddingHorizontal:40,
        justifyContent:'space-between',
        alignItems:'center'
    }
})

function NavbarComponent({navigation}) {
    const route = useRoute()
    return (
    <View style={styles.containerMenu}>
        {listNavbar.map(({Children,navigate},key)=>(
            <TouchableOpacity
                key={key}
                children={<Children active={route.name === navigate || false}/>}
                onPress={()=> navigation.navigate(navigate)}/>
            ))}
    </View>
    )
}

export default NavbarComponent;