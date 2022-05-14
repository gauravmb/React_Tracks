import {useState,useEffect} from "react";
import { Accuracy,requestForegroundPermissionsAsync,watchPositionAsync } from "expo-location";

export default (shouldTrack,recording,callback) => {
    const [err,setErr] = useState(null)
    const [subscriber,setSubscriber] = useState(null)
    // console.log("Inside Use Location Hook");
    const startWatching = async () => {
        try{
            await requestForegroundPermissionsAsync()
             const sub = await watchPositionAsync(
                {
                    accuracy:Accuracy.BestForNavigation,
                    timeInterval:1000,
                    distanceInterval:5
                },
                    callback
                );
                setSubscriber(sub)
                // console.log("Location service  granted ")\
            }
        catch(err)
        {
            // console.log("Location service  granted err")
            setErr(err)
        }
    };

    useEffect(()=>{
        if(shouldTrack)
        {
            if(subscriber)
            {
            subscriber.remove()
            setSubscriber(null)
            }   
            console.log("Called Hook Watching");
            startWatching()
        }
        else
        {
            if(subscriber)
            {
                subscriber.remove()
                setSubscriber(null)
            }
        }
    }
    ,[shouldTrack,recording])
    return [err];
};