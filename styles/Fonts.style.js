import styled from 'styled-components'

// FONTS
export const Title = styled.h3`
    color: ${({ color, theme }) => (color ? color : theme.colors.accent)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
    margin: 1rem 0rem;
`

export const SubTitle = styled.h4`
    color: ${({ color, theme }) => (color ? color : theme.colors.minor)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
    font-size: 0.9em;
    margin: 1.5rem 0rem;
`

export const Paragraph = styled.p`
    color: ${({ color, theme }) => (color ? color : theme.colors.minor)};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
    text-align: justify;
    font-size: 0.9em;
    line-height: 1.5;
    margin: 1.5rem 0rem;
`
export const Tag = styled.h6`
    color: ${({ color, theme }) => (color ? color : theme.colors.minor)};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-size: 0.8em;
    margin: 0.7rem 0rem;
`
