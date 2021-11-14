import { createAppContainer } from "react-navigation";
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import Login from '../screens/login.js';
import MyVideo from "../screens/video.js";

export const AppNavigator = createStackNavigator({
    Login: Login,
    MyVideo: MyVideo,
},
    {
        initialRouteName: "Login",
        defaultNavigationOptions: ({ navigation }) => ({
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,

        }),


    },
    
);


export default createAppContainer(AppNavigator);