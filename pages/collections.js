import { server } from '../config'
import CollectionsList from '../component/Collections/CollectionsList'

export default function Collections({ collections }) {
    return (
        <>
            <CollectionsList collections={collections} />
        </>
    )
}

// FETCH DATA
// // 1] STATIC
export const getStaticProps = async () => {
    const resCollections = await fetch(`${server}/api/collections`)
    const collections = await resCollections.json()

    return {
        props: {
            collections,
        },
        unstable_revalidate: 1,
    }
}
