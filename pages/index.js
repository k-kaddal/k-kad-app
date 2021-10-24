import { server } from '../config'
import ArticleList from '../component/Articles/ArticleList'
import CollectionList from '../component/Collections/CollectionsList'
import ArtistList from '../component/Artists/ArtistsList'

const theme = {
    colors: {
        major: 'black',
        minor: 'white',
        accent: '#40e0d0',
    },
}

export default function Home({ articles, collections, artists }) {
    return (
        <>
            {/* Navbar to be added */}
            {/* <ArticleList articles={articles}/> */}
            {/* <ArtistList artists={artists}/> */}
            {/* <CollectionList collections={collections} /> */}
            {console.log(artists)}
        </>
    )
}

// FETCH DATA
// // 1] STATIC
export const getStaticProps = async () => {
    const resArticles = await fetch(`${server}/api/articles`)
    const articles = await resArticles.json()

    const resCollections = await fetch(`${server}/api/collections`)
    const collections = await resCollections.json()

    const resArtists = await fetch(`${server}/api/artists`)
    const artists = await resArtists.json()

    return {
        props: {
            articles,
            collections,
            artists,
        },
    }
}
