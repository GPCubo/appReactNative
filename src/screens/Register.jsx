import {useState} from 'react';
import { useDispatch } from 'react-redux'
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import TextoComponent from '../components/TextoComponent';
import TitleComponent from '../components/TitleComponent';
import { listInputRegister } from '../lists/listInputRegister';
import { httpRegister } from '../services/httpRequests';
import { updateUser } from "../redux/reducers/userSlice";
function RegisterScreen({navigation}) {
    const dispatch = useDispatch()
    const [registerUser, setRegisterUser] = useState({
        name:'',
        password:'',
        password_confirmation:'',
        email:''
    });
    const handlerInputs=(textLabel,value)=>{
        if(textLabel==='Repeat Password')return(
            setRegisterUser({...registerUser,['password_confirmation']:value})
        )
        setRegisterUser({...registerUser,[textLabel]:value})
    }
    const handlerSubmit = async ()=>{
        try {
            dispatch(updateUser({isAuth:-1}))
            await httpRegister(registerUser)
            dispatch(updateUser({isAuth:0}))
            navigation.navigate('Home')
        } catch (error) {
            Alert.alert(error)
            dispatch(updateUser({isAuth:0}))
        }
    }
    return ( <ScrollView style={{overflow:'visible',minHeight:'100%'}} >
        <View style={stylesDefault.containerOne}/>
        <View style={stylesDefault.containerTwo}>
            <TitleComponent
                textContent='Sign In'/>
            <TextoComponent
                textContent="Sign in and get started"/>
            {
                listInputRegister.map((data,key)=>
                    <InputComponent
                        key={key}
                        setChange={handlerInputs}
                        textLabel={data.textLabel}
                        letterSpacing={data.letterSpacing}
                        secureTextEntry={data.secureTextEntry}/>)
            }
            <ButtonComponent
                textContent='Back'
                funtionToAction={()=> navigation.navigate('Home')} />
            <ButtonComponent
                fillColor
                textContent='Submit'
                funtionToAction={handlerSubmit} />
        </View>
    </ScrollView>);
}
const stylesDefault = StyleSheet.create({
    containerOne:{
        width:'100%',
        minHeight:'20%'
    },
    containerTwo:{
        width:'100%',
        // padding:20,box
        backgroundColor:'#3DD598',
        minHeight:'80%',
        paddingVertical:40,
        paddingHorizontal:20
    }
})
export default RegisterScreen;