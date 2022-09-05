import { useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { listScreenPrivate } from "./src/lists/listScreensPrivate";
import { listScreensPublic } from "./src/lists/listScreensPublic";
import { updateUser } from "./src/redux/reducers/userSlice";
import LoaderComponent from './src/components/LoaderComponent';
import { httpUserInfo } from './src/services/httpRequests';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function AppRoutes() {
    const dispatch = useDispatch();
    const { userInfo } = useSelector(allStates => allStates)

    useEffect(() => {
      httpUserInfo()
      .then(({data})=>dispatch(updateUser({isAuth:1,...data})))
      .catch(()=>dispatch(updateUser({isAuth:0})))
    }, []);
    return ( <>
    {
      userInfo.value.isAuth === -1 ? <LoaderComponent/> :   
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}>
          { userInfo.value.isAuth === 0 ? 
          listScreensPublic.map((data,key)=>(
            <Stack.Screen 
              key={key}
              name={data.name}
              component={data.component}/>
          )) :
          listScreenPrivate.map((data,key)=>(
            <Stack.Screen 
              key={key} 
              name={data.name} 
              component={data.component}/>
          ))
          }
        </Stack.Navigator>
      </NavigationContainer>
      }
    </> );
}

export default AppRoutes;