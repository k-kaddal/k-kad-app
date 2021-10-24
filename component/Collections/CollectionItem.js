import Link from 'next/link'
import Image from 'next/image'
import collectionStyles from '../../styles/Collection.module.css'
import React, { useState, useEffect } from 'react'

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
        <Link href="/collection/[id]" as={`/collection/${collection.id}`}>
            <a className={collectionStyles.card}>
                {/* Left Card */}
                <div className={collectionStyles.left}>
                    <div className={collectionStyles.imageContainer}>
                        {console.log('current index', currentIndex)}
                        <img
                            alt={`${collection.imageAlt}`}
                            src={`${basePath}/${images[currentIndex]}`}
                            className={collectionStyles.image}
                        />
                    </div>
                </div>

                {/* Right Card */}
                <div className={collectionStyles.right}>
                    <h3>{collection.title.toUpperCase()}</h3>
                    <h5>{pieces} Pieces</h5>
                    <h5>Editions of {editions}</h5>
                    <h5>{collection.year}</h5>
                    {/* {collection.tags.map(tag=>
					<div className={collectionStyles.tags}>
					<h5>#{tag}&nbsp;</h5>
					</div>
				)} */}
                </div>
            </a>
        </Link>
    )
}

export default CollectionItem
