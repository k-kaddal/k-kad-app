import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

    @import url(${({ theme }) => theme.fontUrl});


    * {
        box-sizing:border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.major};
        color:${({ theme }) => theme.colors.accent};
        font-family: 'Zen Kaku Gothic New', sans-serif;
        letter-spacing: 0.1em;
        margin: 0;
    }
`

export const Main = styled.div`
    text-align: center;
`
