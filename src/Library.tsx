import React from "react"
import { Text, View } from "react-native"

const Library: React.FC=()=>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text>{'Library'}</Text> 
        </View>
    )
}

export default React.memo(Library);
