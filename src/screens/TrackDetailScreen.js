import React, { useContext } from "react"
import {View,StyleSheet,Text} from "react-native"
import { Context as TrackContext } from "../Context/TrackContext"
import MapView, { Polyline } from "react-native-maps"

const TrackDetailScreen = ({navigation}) =>
{

    const id = navigation.getParam("_id")
    const {state} = useContext(TrackContext)
    const item = state.find(i=>
        i._id === id
    )
    const initalCoords = item.locations[0].coords
    return (
        <>
            <Text style={{fontSize:48}}>{item.name}</Text>
            <MapView initialRegion={{
                longitudeDelta:0.01,
                latitudeDelta:0.01,
                ...initalCoords
            }}
            style={{height:300}}>
                <Polyline coordinates={item.locations.map(loc => loc.coords)}/>
            </MapView>
        </>

    )
}

const styles = StyleSheet.create({
});

export default TrackDetailScreen;