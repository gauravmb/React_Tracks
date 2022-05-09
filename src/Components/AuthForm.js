import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text,Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({header,errorMessage,onSubmit,submitButtonTitle}) =>
{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

   return (
    <>
    <Spacer>
            <Text style={{alignSelf:"center"}} h1>{header}</Text>
        </Spacer> 
        <Spacer>
            <Input label="Email" 
            value={email} 
            onChangeText={(value)=>{
            setEmail(value)
            }}
            autoCapitalize="none"
            autoCorrect={false}
            />
        </Spacer>
        <Spacer>
            <Input label="Password" 
            secureTextEntry
            value={password} 
            onChangeText={(value)=>{
            setPassword(value)
            }}
            autoCapitalize="none"
            autoCorrect={false}
            />
         </Spacer>
         <Spacer>
             {errorMessage?<Text style={{color:"red"}}>{errorMessage}</Text>:null}
         </Spacer>
        <Spacer>
            <Button title={submitButtonTitle} onPress={()=>{
            onSubmit(email,password)
            // navigation.navigate("TrackDetail");
        }}/>
        </Spacer>
    </>
   );
}

const styles= StyleSheet.create({
});

export default AuthForm;