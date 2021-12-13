import React from 'react'
import Link from 'next/link'
import { server } from '../../../config'

const artist = ({ artist }) => {
    return (
        <div>
            <h1>{artist.name}</h1>
            <h2>{artist.biography}</h2>
            <br />
            <Link href="/">Go Back</Link>
        </div>
    )
}

// FETCH DATA
// 1] STATIC
export const getStaticProps = async context => {
    const res = await fetch(`${server}/api/artists/${context.params.id}`)
    const artist = await res.json()

    return {
        props: { artist },
        unstable_revalidate: 1,
    }
}

// 2] PATHS
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/artists`)
    const artists = await res.json()
    const ids = artists.map(a => a.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: true,
    }
}

export default artist
