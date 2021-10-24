import React from 'react'
import Link from 'next/link'
import { server } from '../../../config'
import collectionStyles from '../../../styles/Collection.module.css'

const collection = ({ collection }) => {
    return (
        <div className={collectionStyles.page}>
            <h1>{collection.title}</h1>
            <h2>{collection.description}</h2>
            <h2>{collection.year}</h2>
            <p>{collection.tags}</p>
            <br />
            <Link href="/">Go Back</Link>
        </div>
    )
}

// FETCH DATA
// 1] STATIC
export const getStaticProps = async context => {
    const res = await fetch(`${server}/api/collections/${context.params.id}`)
    const collection = await res.json()

    return {
        props: { collection },
    }
}

// 2] PATHS
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/collections`)
    const collections = await res.json()
    const ids = collections.map(a => a.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

export default collection
