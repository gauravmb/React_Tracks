import React,{useContext} from "react"
import {View,StyleSheet} from "react-native"
import Spacer from "../Components/Spacer"
import {Context as AuthContext} from "../Context/AuthContext"
import AuthForm from "../Components/AuthForm"
import NavLink from "../Components/NavLink"
import { NavigationEvents } from "react-navigation"

const SignupScreen = ({navigation}) =>
{
    const {state,signup,clearErrorMessage} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
            onWillFocus={()=>{
            }}
            onDidFocus={()=>{
            }}
            onDidBlur={()=>{
            }}
            onWillBlur={()=>{
                clearErrorMessage()
            }}
            />
            <AuthForm header="Signup for Tracker" errorMessage={state.errorMessage} onSubmit={(email,password)=>{
                signup(email,password)
            }} submitButtonTitle="Sign-Up"/>
            <Spacer>
            <NavLink linkTitle="Already have a account, Sign-In Instead" routeName="SignIn"/>
         </Spacer>
        </View>
        )
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown:false,
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        flex:1,
        marginBottom:200
    }
});

export default SignupScreen;