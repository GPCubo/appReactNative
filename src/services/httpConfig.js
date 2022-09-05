import axios from "axios"
import { Platform } from "react-native";
const httpRequest = axios.create();
httpRequest.defaults.headers.common['Authorization'] = ''
httpRequest.defaults.baseURL = 'http://192.168.0.101:8000' 
export default httpRequest