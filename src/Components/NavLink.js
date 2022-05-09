import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = ({navigation,linkTitle,routeName}) => {
return (
    <>
        <TouchableOpacity onPress={()=>{
            navigation.navigate(routeName)
            }}>
            <Text style={styles.link} h5>{linkTitle}</Text>
        </TouchableOpacity>
    </>);
}

const styles=StyleSheet.create({
    link:{
        color:"blue"
    }
})

export default withNavigation(NavLink);