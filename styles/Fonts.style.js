import styled from 'styled-components'

// FONTS
export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.accent};
`

export const SubTitle = styled.h2`
    color: ${({ theme }) => theme.colors.minor};
`

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.minor};
`
