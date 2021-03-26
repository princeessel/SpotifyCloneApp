import React from "react";
import { View, Text } from "react-native";

const SpotifyScreen: React.FC=()=>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text>{'SpotifyScreen'}</Text> 
        </View>
    )
}

export default React.memo(SpotifyScreen);
