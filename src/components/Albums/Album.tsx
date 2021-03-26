import React from "react";
import { View, Text, Image } from "react-native";
import { TAlbum } from "../../types/appTypes";
import { styles } from "./styles";

export interface IProps{
    album: TAlbum
}

const Album: React.FC<IProps> =({album})=>{
    return(
        <View style={styles.container}>
            <Image
              source={{uri: album.imageUri}}
              style={styles.image}
            />
           <Text style={styles.headlinerText}>{album.artistsHeadline}</Text> 
        </View>
    )
}
export default React.memo(Album);
