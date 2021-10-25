import Link from 'next/link'
import Image from 'next/image'
import collectionStyles from '../../styles/Collection.module.css'
import React, { useState, useEffect } from 'react'
import { Card, Left, Right, Button } from '../../styles/Section.style'
import { Title, SubTitle, Paragraph, Tag } from '../../styles/Fonts.style'
import { withTheme } from 'styled-components'
import theme from '../../styles/theme'

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
        }, 10000 / images.length)

        return () => clearInterval(intervalId)
    }, [currentIndex])

    return (
        <Card>
            <Left>
                <img
                    alt={`${collection.imageAlt}`}
                    src={`${basePath}/${images[currentIndex]}`}
                />
            </Left>
            <Right>
                <Tag fontWeight="normal">
                    {pieces} Artworks, Editions of {editions}
                </Tag>
                <Title>| {collection.title.toUpperCase()} </Title>
                <Tag color={theme.colors.accent} fontWeight="normal">
                    | {collection.year}
                </Tag>
                <Button>FIND ON OPENSEA</Button>
                <Button>DETAILS</Button>
            </Right>
        </Card>
    )
}

export default withTheme(CollectionItem)
