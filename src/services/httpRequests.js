import { clearAll, getData } from "./AsyncStorage";
import httpRequest from "./httpConfig";

export const httpLogin = async (data) => {
    try {
        httpRequest.defaults.headers.common['Authorization'] = ``
        return await httpRequest.post('/api/login',data)
    } catch (error) {
        throw error
    }
}
export const htttpIsAuth = async () => {
    try {
        const { access_token } = await getData()
        // console.log(access_token)
        httpRequest.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
        return await httpRequest.post('/api/auth',{})
    } catch (error) {
        httpRequest.defaults.headers.common['Authorization'] = ''
        throw error
    }
    
}
export const httpLogout = async() => {
    try {
       const { access_token } = await getData()
       httpRequest.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
       await httpRequest.post('/api/out',{})
       httpRequest.defaults.headers.common['Authorization'] = ''
       await clearAll()
    } catch (error) {
        throw error
    }
}

export const httpUserInfo = async() => {
    try {
        const { access_token } = await getData()
        httpRequest.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
        return await httpRequest.post('/api/user',{})
    } catch (error) {
        throw error
    }
}

export const httpRegister = async(data) => {
    try {
        console.log(data)
        const check = Object.values(data).find((inputValue)=> inputValue.length === 0)
        if(!check && check !== undefined)throw(
            new Error('Todos los campos son requeridos')
        )
        if(data.password !== data.password_confirmation)throw(
            new Error('Las contraseñas deben ser iguales')
        )
        if(data.password.length < 4 || data.password_confirmation.length < 4)throw(
            new Error('Las contraseńas deben ser minimo de 4 caracteres')    
        )
        httpRequest.defaults.headers.common['Authorization'] = ``
        return await httpRequest.post('/api/register',data)
    } catch (error) {
        console.log(error)
        if(error.response?.status ===  422) throw 'Correo invalido o ya registrado'
        throw error
    }
}