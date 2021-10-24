import React from 'react'
import Link from 'next/link'
import { server } from '../../../config'

const article = ({ article }) => {
    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}

// FETCH DATA
// 1] STATIC
export const getStaticProps = async context => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props: { article },
    }
}

// 2] PATHS
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const ids = articles.map(a => a.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}

export default article
