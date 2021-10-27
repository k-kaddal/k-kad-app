import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Card, Left, Right, Button } from '../../styles/Section.style'
import { Title, SubTitle, Paragraph, Tag } from '../../styles/Fonts.style'
import theme from '../../styles/Theme'

const CollectionItem = ({ collection }) => {
    const basePath = '/images'
    const pieces = collection.artworks.length
    const editions = collection.artworks
        .map(artwork => artwork.edition)
        .reduce((a, b) => a + b + 0)
    const images = collection.artworks.map(artwork => artwork.imageUrl)

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0)
            } else {
                setCurrentIndex(currentIndex + 1)
            }
        }, 15000 / images.length)

        return () => clearInterval(intervalId)
    }, [currentIndex])

    return (
        <Card>
            <Link href="/collection/[id]" as={`/collection/${collection.id}`}>
                <Left>
                    <img
                        alt={`${collection.imageAlt}`}
                        src={`${basePath}/${images[currentIndex]}`}
                    />
                </Left>
            </Link>

            <Right>
                <Title>| {collection.title.toUpperCase()} </Title>
                <Tag color={theme.colors.accent} fontWeight="normal">
                    | {collection.year}
                </Tag>
                <br />
                <Tag fontWeight="100">
                    {pieces} Artworks, Editions of {editions}
                </Tag>
                <Tag fontWeight="100">#{collection.tags.join(', #')}</Tag>

                <Link href={collection.marketplace}>
                    <a target="_blank" rel="noreferrer">
                        <Button>FIND ON OPENSEA</Button>
                    </a>
                </Link>
                <Link
                    href="/collection/[id]"
                    as={`/collection/${collection.id}`}
                >
                    <Button>DETAILS</Button>
                </Link>
            </Right>
        </Card>
    )
}

export default CollectionItem
