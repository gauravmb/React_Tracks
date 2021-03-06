import { useContext } from "react";
import {Context as LocationContext} from "../Context/LocationContext"
import {Context as TrackContext} from "../Context/TrackContext"

export default () => {
    const {state:{name,locations},reset} = useContext(LocationContext)
    const {createTrack} = useContext(TrackContext)

    const saveTrack = ()=>{
        createTrack(name,locations)
        reset();
    }
    return [saveTrack]
}