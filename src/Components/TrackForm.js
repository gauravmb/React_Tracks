import React, { useContext,useState } from "react";
import {Input, Text, Button } from "react-native-elements";
import { View,StyleSheet} from "react-native";
import Spacer from "./Spacer";
import {Context as LocationContext} from "../Context/LocationContext"
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const {state:{name,recording,locations},startRecording,stopRecording,changeName} = useContext(LocationContext)
    console.log(locations.length)
    const [saveTrack] = useSaveTrack()

    return (
        <View>
            <Spacer>
                <Input placeholder="Enter Name" value={name} onChangeText={changeName} />
            </Spacer>
            <Spacer>
                {
                    recording?
                    <Button title="Stop Recording" onPress={() => {
                        stopRecording()
                    }}
                    />
                    : 
                    <Button title="Start Recording" onPress={() => {
                        startRecording()
                    }}
                    />
                }  
            </Spacer>
          
            <Spacer>
                <Text>Track Name:{name}</Text>
            </Spacer>
            <Spacer>
                 {
                    !recording && locations.length?  <Button title="Save Track" onPress={()=>{
                        saveTrack()

                    }}/>:null 
                 }            
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default TrackForm
