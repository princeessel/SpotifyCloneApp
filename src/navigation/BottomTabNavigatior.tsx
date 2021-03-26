import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import React from "react"
import HomeScreen from "../HomeScreen";
import Library from "../Library";
import SearchScreen from "../SearchScreen"
import SpotifyScreen from "../SpotifyScreen";

const BottomTabs: React.FC=()=> {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
        initialRouteName="App"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
        >
            <Tab.Screen name ="HomeScreen" component={HomeScreen} options={{tabBarLabel: 'Home'}}/>
            <Tab.Screen name ="SearchScreen" component={SearchScreen} options={{tabBarLabel: 'Search'}}/>
            <Tab.Screen name ="Library" component={Library} options={{tabBarLabel: 'Your Library'}}/>
            <Tab.Screen name ="SpotifyScreen" component={SpotifyScreen} options={{tabBarLabel: 'Spotify'}}/>
        </Tab.Navigator>
    )
}

export default React.memo(BottomTabs);