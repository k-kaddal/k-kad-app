import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap');

    body {
        background-color: ${({theme})=>theme.colors.major};
        color:${({theme})=>theme.colors.accent};
        font-family: 'Zen Kaku Gothic New';
        letter-spacing: 0.1em;
    }
`

export const Main = styled.div`
    text-align: center;
`;


// FONTS
export const Title = styled.h1`
    color:${({theme})=>theme.colors.accent};
`

export const Logo = styled.h3`
    color:${({theme})=>theme.colors.accent};
`

export const SubTitle = styled.h2`
    color:${({theme})=>theme.colors.minor};
`

export const Paragraph = styled.p`
    color:${({theme})=>theme.colors.minor};
`