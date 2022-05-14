import React,{useContext} from "react"
import {StyleSheet} from "react-native"
import { Text } from "react-native-elements"
import Map from "../Components/Map"
import { SafeAreaView,withNavigationFocus } from "react-navigation"
import { requestForegroundPermissionsAsync, watchPositionAsync,Accuracy } from "expo-location"
import {Context as LocationContext} from "../Context/LocationContext"
import useLocation from "../hooks/useLocation"
// import "../_mockLocation"
import TrackForm from "../Components/TrackForm"
import {FontAwesome} from "@expo/vector-icons"


const TrackCreateScreen = ({isFocused}) =>
{
    const {state:{recording},addLocation} = useContext(LocationContext);
    // console.log("TrackCreateScreen Rerendered")

    const [err] = useLocation(isFocused,recording,(location)=>{
        addLocation(recording,location)
    })

    return (
        <SafeAreaView>
            <Text h3>Create a Track</Text>
            <Map></Map>
            { err?<Text>Error:{err.message}</Text>:null }
            <TrackForm/>
        </SafeAreaView>
    );
}

TrackCreateScreen.navigationOptions = {
    title:"Add Track",
    tabBarIcon: <FontAwesome name="plus" size={20}></FontAwesome>
}

const styles = StyleSheet.create({
});

export default withNavigationFocus(TrackCreateScreen);