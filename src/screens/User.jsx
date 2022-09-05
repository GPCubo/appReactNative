import { updateUser } from '../redux/reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import NavbarComponent from "../components/NavbarComponent";
import TextoComponent from "../components/TextoComponent";
import * as ImagePicker from 'expo-image-picker';
import { httpLogout } from '../services/httpRequests';

function UserScreen({navigation}) {
    const dispatch = useDispatch()
    const { userInfo:{ value } } = useSelector(allStates => allStates); 
    const [status, requestPermission] = ImagePicker.useCameraPermissions();
    const handlerPhoto = async () =>{
        await requestPermission()
        const data = await ImagePicker.launchCameraAsync()
        if(data.cancelled)return
        dispatch(updateUser({photoURI:data.uri}))
    }
    
    const handlerLogout = async()=>{
        try {
            dispatch(updateUser({isAuth:-1}))
            await httpLogout()
            dispatch(
                updateUser({isAuth:0,photoURI:undefined})
            )
        } catch (error) {
            Alert.alert(`Ha ocurrido un error inesperado ${error}`)
        }
    }
    return (<>
    <View 
        style={styles.userContainer}>
        <View style={styles.photoContainer}>
            <TouchableOpacity 
                style={styles.userPhoto} 
                onPress={handlerPhoto}>
                    {
                        value.photoURI
                        && <Image source={{uri:value.photoURI}} 
                        style={styles.imgProfile}/>
                    }
            </TouchableOpacity>
            <TextoComponent
                whiteText='#000000'
                textContent={value.email}/>
        </View>
        <ButtonComponent 
            fillColor 
            funtionToAction={handlerLogout}
            textContent='Log out'/>
    </View>
    <NavbarComponent 
        navigation={navigation}/>
    </>)
}
const styles = StyleSheet.create({
    imgProfile:{
        width:'100%',
        flex:1,
        borderRadius:100
    },
    userPhoto:{
        width:100,
        height:100,
        borderRadius:100,
        backgroundColor:'#fff'
    },
    userContainer:{
        alignItems:'center',
        paddingHorizontal:20,
        height:'88%',
        justifyContent:'space-between',
        paddingBottom:20,
        paddingTop:45
    },
    photoContainer:{
        justifyContent:'center',
        alignItems:'center',
    }
})
export default UserScreen;