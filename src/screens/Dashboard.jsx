import ButtonComponent from "../components/ButtonComponent";
import NavbarComponent from "../components/NavbarComponent";

function DashboardScreen({navigation}) {
    // console.log(navigation.navigate('Home'));
    return (<>
        <NavbarComponent navigation={navigation}/>
    </>)
}

export default DashboardScreen;