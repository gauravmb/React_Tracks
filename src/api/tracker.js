import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"

const instance = axios.create({
    baseURL:"https://3c74-171-79-42-120.in.ngrok.io"
})

instance.interceptors.request.use(
async (config)=>{
    const token = await AsyncStorage.getItem('token')
    if(token)
    {
        config.headers.Authorization = `Bearer ${token}`
        console.log("instance.interceptors.request",instance.interceptors.request)
    }
    return config
},
(err)=>{
    return Promise.reject(err)
}
);

export default instance;
