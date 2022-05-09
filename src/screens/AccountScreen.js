import React, { useContext } from "react"
import {View,StyleSheet,SafeAreaView} from "react-native"
import { Button } from "react-native-elements"
import { Context as AuthContext } from "../Context/AuthContext"

const AccountScreen = () =>
{
    const {signout} = useContext(AuthContext);
    return ( 
        <>
            <SafeAreaView>
                <View>
                    <Button title="Sign Out" onPress={()=>{
                    signout()
                    }}/>
                </View> 
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
});

export default AccountScreen;