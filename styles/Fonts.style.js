import styled from 'styled-components'

// FONTS
export const Title = styled.h3`
    color: ${({ color, theme }) => (color ? color : theme.colors.accent)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
`

export const SubTitle = styled.h4`
    color: ${({ color, theme }) => (color ? color : theme.colors.minor)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
`

export const Paragraph = styled.p`
    color: ${({ color, theme }) => (color ? color : theme.colors.minor)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
    text-align: justify;
    font-size: 0.9em;
`
export const Tag = styled.h5`
    color: ${({ color, theme }) => (color ? color : theme.colors.minor)};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-size: 0.8em;
`
