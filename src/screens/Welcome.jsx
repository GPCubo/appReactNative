import { StyleSheet, View } from "react-native";
import ButtonComponent from '../components/ButtonComponent';
import TextoComponent from '../components/TextoComponent';
import TitleComponent from '../components/TitleComponent';

function WelcomeScreen ({navigation}) {
    return ( 
        <>
            <View style={styles.bgImg}>
                <View style={[styles.viewContainer]}>
                    <TitleComponent
                        textContent='Welcome'/>
                    <TextoComponent
                        textContent='Contrary to popular belief, Lorem 
                        Ipsum is not simply.'/>
                    <ButtonComponent
                        textContent='Login'
                        funtionToAction={()=> navigation.navigate('login')}/>
                    <ButtonComponent
                        fillColor
                        textContent='Create Account'
                        funtionToAction={()=> navigation.navigate('register')}/>
                    </View>
            </View>
        </>
     );
}
const styles = StyleSheet.create({
    bgImg:{
        flex:1,
        width:'100%',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    viewContainer:{
        backgroundColor:'#3DD598',
        paddingRight:21,
        paddingLeft:21,
        paddingTop:21,
        width:'100%',
        textAlign:'center',
        height:'40%',
        alignItems:'center',
    }
})

export default WelcomeScreen ;