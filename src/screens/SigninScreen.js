import React,{useContext} from "react"
import {View,StyleSheet} from "react-native"
import Spacer from "../Components/Spacer"
import {Context as AuthContext} from "../Context/AuthContext"
import AuthForm from "../Components/AuthForm"
import NavLink from "../Components/NavLink"
import { NavigationEvents } from "react-navigation"

const SigninScreen = ({navigation}) =>
{
    const {state,signin,clearErrorMessage} = useContext(AuthContext)

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
            <AuthForm header="Signin for Tracker" errorMessage={state.errorMessage} onSubmit={(email,password)=>{
                signin(email,password)
            }} submitButtonTitle="Sign-In"/>
            <Spacer>
            <NavLink linkTitle="Don't have a account, Sign-Up Now" routeName="SignUp"/>
         </Spacer>
        </View>
        )
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;