import React from 'react'
import Link from 'next/link'
import { Grid } from '../../styles/Section.style'
import ArtworkItem from './ArtworkItem'

const ArtworkList = ({ collection }) => {
    return (
        <Grid>
            {collection.artworks.map((artwork, key) => {
                return (
                    <ArtworkItem
                        key={key}
                        id={key}
                        artwork={artwork}
                        collectionName={collection.title}
                        marketplace={collection.marketplace}
                    />
                )
            })}
        </Grid>
    )
}

export default ArtworkList
