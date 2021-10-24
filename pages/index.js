import { server } from '../config'
import Head from 'next/head'
import ArticleList from '../component/Articles/ArticleList'
import CollectionList from '../component/Collections/CollectionsList'
import ArtistList from '../component/Artists/ArtistsList'
import { GlobalStyle, Main, Logo } from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        major: 'black',
        minor: 'white',
        accent:'#40e0d0'
    }
}

export default function Home({ articles, collections, artists }) {
    return (
        <ThemeProvider theme={theme}>
        <>
            <Head>
                <title>Khaled Kaddal Official Website</title>
            </Head>
            <Main>
                <GlobalStyle />
                {/* Navbar to be added */}
                {/* <ArticleList articles={articles}/> */}
                {/* <ArtistList artists={artists}/> */}
                {/* <CollectionList collections={collections} /> */}
                <Logo>KHALED KADDAL</Logo>
            </Main>
        </>
        </ThemeProvider>
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
