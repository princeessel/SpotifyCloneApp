import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { AlbumCategoryList } from "./components/AlbumCategoryList"
import albumCategories from "./data/albumCategories"


const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={albumCategories}
                renderItem={({ item }) => (
                    <AlbumCategoryList
                        title={item.title}
                        albums={item.albums}
                    />
                )}
                keyExtractor={(item)=> item.id}
            />
        </View>
    )
}

export default React.memo(HomeScreen);

export const styles= StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'black'
    }
})
