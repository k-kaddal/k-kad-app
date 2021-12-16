import React from 'react'
import Link from 'next/link'
import { server } from '../../../config'
import studios from '../../../data/studios.json'

const studio = ({ studio }) => {
    return <></>
}

// FETCH DATA
// 1] STATIC
export const getStaticProps = async ({ params }) => {
    // const res = await fetch(`${server}/api/studios/${context.params.id}`)
    // const studio = await res.json()

    const studio = studios.find(studio => studio.id === params.id)

    return {
        props: { studio },
        // unstable_revalidate: 1,
    }
}

// 2] PATHS
export const getStaticPaths = async () => {
    // const res = await fetch(`${server}/api/studios`)
    // const studios = await res.json()
    // const ids = studios.map(a => a.id)
    // const paths = ids.map(id => ({ params: { id: '' + id } }))

    const paths = studios.map(studio => ({
        params: { id: studio.id },
    }))

    return {
        paths,
        fallback: false,
    }
}

export default studio
