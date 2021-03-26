import React from "react";
import { View, Text, FlatList } from "react-native";
import { TAlbum } from "../../types/appTypes";
import { Album } from "../Albums";
import { styles } from "./styles";

export interface IAlbumCategoryListProps{
    title: string
    albums: TAlbum[]
}

const AlbumCategoryList: React.FC<IAlbumCategoryListProps> =({albums, title})=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
              data={albums}
              renderItem={({item}) => <Album album={item}/>}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
export default React.memo(AlbumCategoryList);
