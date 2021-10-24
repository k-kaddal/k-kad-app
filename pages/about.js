import React from 'react'
import { SubTitle, Title, Paragraph } from '../styles/Fonts.style'
import artists from '../data/artists'

const about = () => {
    return (
        <div>
            <Title>About</Title>
            <SubTitle>Biography</SubTitle>
            {console.log(artists)}
            <Paragraph></Paragraph>
        </div>
    )
}

export default about
