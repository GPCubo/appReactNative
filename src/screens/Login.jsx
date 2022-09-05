import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { storeData } from '../services/AsyncStorage';
import { httpLogin, httpUserInfo } from "../services/httpRequests";
import TitleComponent from "../components/TitleComponent";
import TextComponentCustom from "../components/TextoComponent";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/reducers/userSlice';

function LoginScreen({navigation}) {
    const [user, setUser] = useState({});
    const dispatch = useDispatch()
    const handleChange = (key,value) => setUser({...user,[key]:value})
    const handleData = async () => {
        try {
            dispatch(updateUser({isAuth:-1}))
            const { data } = await httpLogin(user)
            await storeData(data)
            const { data:userInfo } = await httpUserInfo()
            dispatch(updateUser({isAuth:1,...userInfo}))
        } catch (error) {
            dispatch(updateUser({isAuth:0}))
        }
    }

    return ( 
        <ScrollView style={{overflow:'visible'}}>
            <View
            style={{width:'100%',minHeight:'34%'}}
            ></View>
            <View 
                style={styles.bgGradient}>
                <TitleComponent
                    textContent='Log In'/>
                <TextComponentCustom
                    textContent='Contrary to popular belief, Lorem 
                    Ipsum is not simply .'/>
                <InputComponent
                    setChange={handleChange}
                    secureTextEntry={false}
                    textLabel="email"/>
                <InputComponent
                    setChange={handleChange}
                    secureTextEntry={true}
                    textLabel="password"
                    letterSpacing/>
                <Text
                    style={styles.textPassword}>Forget your password?
                </Text>
                <ButtonComponent
                    fillColor
                    textContent='Login'
                    funtionToAction={handleData}/>
                <ButtonComponent
                    textContent='Return'
                    funtionToAction={()=>navigation.navigate('Home')}/>
            </View>
        </ScrollView>
     );
}
const styles = StyleSheet.create({
    bgGradient:{
        padding:20,
        // flex:1,
        overflow:'visible',
        minHeight:'66%',
        position:'relative',
        backgroundColor:'#3DD598'
    },
    textPassword:{
        width:'100%',
        padding:8,
        textAlign:'right',
        color:'#fff',
        opacity:1
    }
})
export default LoginScreen;