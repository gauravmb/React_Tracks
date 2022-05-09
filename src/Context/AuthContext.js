import createDataContext from "./createDataContext"
import trackerAPI from "../api/tracker"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { navigate } from "../navigationRef"

const reducer = (state,action) =>
{
    switch(action.type)
    {
        case "add_error":
            {
                return {...state,errorMessage:action.payload,token:null}
            }
        case "signup":
            {
                console.log("Successfull Sign-Up")
                return {...state,errorMessage:null,token:action.payload}
            }
        case "signin":
            {
                console.log("Successfull Sign-In")
                return {...state,errorMessage:null,token:action.payload}
            }
        case "signout":
            {
                console.log("Successfull Sign-out")
                return {...state,errorMessage:null,token:null}
            }
        case "clear_error_message":
            {
                console.log("Inside clear_error_message");
                return {...state,errorMessage:null,token:null}
            }
        default:
            return state
    }
}

const tryLocalSignIn = (dispatch) => {
    return async ()=> {
        const token = await AsyncStorage.getItem("token");
        if(token)
        {
            console.log("Already Login with Token-->",token)
            dispatch({type:"signin",payload:token})
            navigate("TrackList")
        }
        else
        {
            navigate("SignUp")
        }
    }
}

const signup = (dispatch) => async (email,password) => {
        try {
            const response = await trackerAPI.post("/signup",{email,password})
            console.log(response.data)
            await AsyncStorage.setItem("token",response.data.token)
            dispatch({type:"signup",payload:response.data.token})
            navigate("TrackList");
        }
        catch(err)
        {
            dispatch({type:"add_error",payload:err.message})
        }
    }

const signin = (dispatch) =>
{
    return async (email,password) => {
        try {
            const response = await trackerAPI.post("/signin",{email,password})
            console.log(response.data)
            await AsyncStorage.setItem("token",response.data.token)
            dispatch({type:"signin",payload:response.data.token})
            navigate("TrackList")
       }
        catch(err)
        {
            dispatch({type:"add_error",payload:err.message})
        }
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({type:"clear_error_message"})
    }
}

const signout = (dispatch)=>
{
    return async () => {
        try {
            await AsyncStorage.removeItem("token");
        }
        catch (exception) {
            return false;
        }
        dispatch({type:"signout"})
        navigate("loginFlow");    
        const token = AsyncStorage.getItem("token");
        console.log("Already Login with Token removed-->",token)

        // await AsyncStorage.removeItem("token").then(()=>{
        //     dispatch({type:"signout"})
        // });
    }
}

export const {Provider,Context} = createDataContext(
    reducer,
    {signin,signout,signup,clearErrorMessage,tryLocalSignIn},
    {token:null,errorMessage:null}
)