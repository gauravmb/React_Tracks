import createDataContext from "./createDataContext";
import trakerApi from "../api/tracker"
import { navigate } from "../navigationRef";


const trackReducer = (state,action) =>{
    switch(action.type)
        {
            case "fetch_Track":
                {
                    return action.payload;
                }
            case "save_Track":
                {
                    return state   
                }
        }
}

const fetchTrack =  (dispatch) => {
    return async () => {
        try{
             const response =  await trakerApi.get("/tracks")
            dispatch({type:"fetch_Track",payload:response.data})
            console.log("Fetched Data -->",response.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }
}

const createTrack = (dispatch) => {
    return async (name,locations) => {
        try
        {
            await trakerApi.post("/tracks",{name,locations})
            console.log("inside createTrack")
            navigate("TrackList")
        }
        catch(err)
        {
            console.log(err)
        }
        console.log("Inside createTrack : ",locations,name)
    }
}

export const {Context, Provider} = createDataContext(
    trackReducer,
    {createTrack,fetchTrack},
    []
)