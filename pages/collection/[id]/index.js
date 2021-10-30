import React from 'react'
import Link from 'next/link'
import { server } from '../../../config'
import { Page, About } from '../../../styles/Section.style'
import ArtworkList from '../../../component/Collections/ArtworkList'
import { Tag, Title, Paragraph } from '../../../styles/Fonts.style'
import theme from '../../../styles/Theme'
import { Button } from '../../../styles/Section.style'

const collection = ({ collection }) => {
    const pieces = collection.artworks.length
    const editions = collection.artworks
        .map(artwork => artwork.edition)
        .reduce((a, b) => a + b + 0)

    var description = collection.description.split('\n')

    return (
        <Page>
            <About>
                <Title>{collection.title.toUpperCase()} </Title>
                <Tag color={theme.colors.accent} fontWeight="normal">
                    {collection.year}
                </Tag>
                <Tag fontWeight="100">
                    {pieces} Artworks, Editions of {editions}
                </Tag>

                {description.map((line, key) => {
                    return (
                        <Paragraph key={key} fontWeight="lighter">
                            {line}
                        </Paragraph>
                    )
                })}

                <Tag fontWeight="100" color={theme.colors.accent}>
                    #{collection.tags.join(', #')}
                </Tag>
                <Link href={collection.marketplace}>
                    <a target="_blank" rel="noreferrer">
                        <Button>FIND ON OPENSEA</Button>
                    </a>
                </Link>
            </About>
            <ArtworkList collection={collection} />
        </Page>
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
