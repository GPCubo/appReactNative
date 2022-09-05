import BellICon from "../components/svgs/BellIcon";
import DiscoveryIcon from "../components/svgs/DiscoveryIcon";
import HomeIcon from "../components/svgs/HomeIcon";
import MessageIcon from "../components/svgs/MessageIcon";
import UserIcon from "../components/svgs/UserIcon";

export const listNavbar = [
    {
        navigate:'dashboard',
        Children:HomeIcon
    },
    {
        navigate:'discovery',
        Children:DiscoveryIcon
    },
    {
        navigate:'messages',
        Children:MessageIcon
    },
    {
        navigate:'notifications',
        Children:BellICon
    },
    {
        navigate:'user',
        Children:UserIcon
    },
]