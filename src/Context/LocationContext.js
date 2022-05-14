import createDataContext from "./createDataContext";

const locationReducer = (state,action) =>
{
    switch(action.type)
    {
        case "reset":
            {
                return {...state,name:"",locations:[]}
            }
        case "change_name":
            {
                return {...state,name:action.payload}
            }
        case "start_recording":
            {
            const newstate = {...state,recording:true} ;
            return newstate;
            }
        case "stop_recording":
            {
                return {...state,recording:false};
            }
        case "add_location":
            {
                const newstate = {...state,currentLocation:action.payload} ;
                return newstate;
            }
        case "add_track_locations":
            {
                // console.log("add_track_locations R")
            return {...state,locations:[...state.locations,action.payload]};
            }
        default:
            return state
    }
}

const startRecording = (dispatch) =>
{
    return ()=>{
        // console.log("start_recording")
        dispatch({type:"start_recording"})
    }
}


const changeName = (dispatch) =>
{
    return (name)=>{
        dispatch({type:"change_name",payload:name})
    }
}


const stopRecording = (dispatch) =>
{
    return ()=>{
        // console.log("stop_recording")
        dispatch({type:"stop_recording",payload:null})
    }
}

const addLocation = (dispatch) =>
{
    return (recording,location) =>{
        dispatch({type:"add_location",payload:location})
        console.log("Recording -->",recording);
        if(recording === true)
        {
            dispatch({type:"add_track_locations",payload:location})
        }
    }
}
const reset = (dispatch) =>
{
    return ()=>{
        dispatch({type:"reset"});
    }
}

const addTrackLocations = (dispatch) =>
{
    return (location) =>{
        dispatch({type:"add_track_locations",payload:location})
    }
}

export const {Context,Provider} = createDataContext(locationReducer,
    {startRecording,stopRecording,addLocation,addTrackLocations,changeName,reset},
    {name:"",recording:false,locations:[],currentLocation:null}
    )