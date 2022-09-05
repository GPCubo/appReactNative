import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import WelcomeScreen from "../screens/Welcome";

export const listScreensPublic = [
    {
        name:'Home',
        component:WelcomeScreen
    },
    {
        name:'register',
        component:RegisterScreen
    },
    {
        name:'login',
        component:LoginScreen
    }
]