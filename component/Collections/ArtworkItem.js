import React from 'react'
import styled from 'styled-components'
import { SubTitle, Tag } from '../../styles/Fonts.style'
import theme from '../../styles/Theme'
import Link from 'next/link'

const ArtworkItem = ({ id, artwork, collectionName, marketplace }) => {
    const basePath = '/images'

    return (
        <Link href={marketplace}>
            <a target="_blank" rel="noreferrer">
                <Card>
                    <img src={`${basePath}/${artwork.imageUrl}`} />
                    <div>
                        <Tag color={theme.colors.accent} fontWeight="lighter">
                            {collectionName.toUpperCase()} # {id + 1}
                        </Tag>
                        <Tag fontWeight="lighter">
                            Edition : {artwork.edition}
                        </Tag>
                        <Tag fontWeight="lighter">Price : £{artwork.price}</Tag>
                    </div>
                </Card>
            </a>
        </Link>
    )
}

export default ArtworkItem

// STYLES

const Card = styled.div`
    width: 20rem;
    height: 'auto';
    border: thin solid ${({ theme }) => theme.colors.accent_soft};
    text-align: left;

    h5 {
        margin: 1rem 0;
    }

    div {
        margin-top: 1rem;
        padding-left: 1rem;
    }

    img {
        object-fit: contain;
        width: 100%;
    }

    & :hover {
        border: thin solid ${({ theme }) => theme.colors.accent};
        box-shadow: 0px 0px 7px 0.5px ${({ theme }) => theme.colors.minor};
    }
`
