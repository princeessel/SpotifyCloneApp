export type TAlbum= {
    id: string
    imageUri: string
    artistsHeadline: string   
}

export type TAlbumCategory= {
    title: string
    albums: TAlbum[]
}