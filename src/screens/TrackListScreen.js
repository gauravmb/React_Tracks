import React, { useContext } from "react"
import {StyleSheet,Text,FlatList,TouchableOpacity} from "react-native"
import {Context as TrackContext} from "../Context/TrackContext"
import { NavigationEvents } from "react-navigation"
import { ListItem } from "react-native-elements"


const TrackListScreen = ({navigation}) =>
{
    const {state,fetchTrack} = useContext(TrackContext)
    return (<>
        <NavigationEvents onWillFocus={()=>{
            console.log("onWillFocus")
            fetchTrack()
        }}/>
        <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>{
                navigation.navigate("TrackDetail",{_id:item._id})
            }}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
        </>)
}

TrackListScreen.navigationOptions={
    title:"Tracks"
}

const styles = StyleSheet.create({
});

export default TrackListScreen;