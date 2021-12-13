import React from 'react'
import Link from 'next/link'
import { server } from '../../../config'

const studio = ({ studio }) => {
    return <></>
}

// FETCH DATA
// 1] STATIC
export const getStaticProps = async context => {
    const res = await fetch(`${server}/api/studios/${context.params.id}`)
    const studio = await res.json()

    return {
        props: { studio },
        // unstable_revalidate: 1,
    }
}

// 2] PATHS
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/studios`)
    const studios = await res.json()
    const ids = studios.map(a => a.id)
    const paths = ids.map(id => ({ params: { id: '' + id } }))

    return {
        paths,
        fallback: false,
    }
}

export default studio
