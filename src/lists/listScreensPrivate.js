import DashboardScreen from "../screens/Dashboard";
import DiscoveryScreen from "../screens/Discovery";
import MessagesScreen from "../screens/Messages";
import NotificationScreen from "../screens/Notifications";
import UserScreen from "../screens/User";

export const listScreenPrivate = [
    {
        name:'dashboard',
        component:DashboardScreen
    },
    {
        name:'discovery',
        component:DiscoveryScreen
    },
    {
        name:'messages',
        component:MessagesScreen
    },
    {
        name:'notifications',
        component:NotificationScreen
    },
    {
        name:'user',
        component:UserScreen
    }
]