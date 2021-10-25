import styled from 'styled-components'

// FONTS
export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.accent};
    font-weight: normal;
`

export const SubTitle = styled.h4`
    color: ${({ theme }) => theme.colors.minor};
    font-weight: normal;
`

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.minor};
    font-weight: normal;
`
export const Tag = styled.h5`
    color: ${({ color, theme }) => (color ? color : theme.colors.minor)};
    font-weight: ${({ fontWeight }) => fontWeight};
`
