import {createAppContainer,createSwitchNavigator} from "react-navigation"
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import {Provider as AuthProvider} from "./src/Context/AuthContext"
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import {Provider as LocationProvider} from "./src/Context/LocationContext"
import {Provider as TrackProvider} from "./src/Context/TrackContext"
import {FontAwesome} from "@expo/vector-icons"

const trackFlowList = createStackNavigator({
  TrackList:TrackListScreen,
  TrackDetail:TrackDetailScreen
})

trackFlowList.navigationOptions={
  title:"Tracks",
  tabBarIcon:<FontAwesome name="th-list" size={20}></FontAwesome>
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  loginFlow:createStackNavigator({
    SignUp:SignupScreen,
    SignIn:SigninScreen
  }),
  mainFlow:createBottomTabNavigator({
    trackListFlow:trackFlowList,
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen,    
  })
})

const App = createAppContainer(switchNavigator);

export default ()=>{
  return (
  <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator)=>
          {
            setNavigator(navigator)}}/>
      </AuthProvider>
    </LocationProvider>
  </TrackProvider>
    );
};