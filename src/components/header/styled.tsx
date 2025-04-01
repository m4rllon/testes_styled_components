import styled from "styled-components";

// Textos:
export const TitleText = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
`

interface ParagraphProps {
    colorDecorate?: string;
}
export const ParagraphText = styled.p<ParagraphProps>`
    font-size: 16px;
    font-weight: normal;
    color: ${({theme, colorDecorate}) => (colorDecorate) ? colorDecorate : theme.colors.text};
`

// Containers:
export const HeaderContainer = styled.header`
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.background};
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

// Outras tags:
interface LinkProps {
    href: string;
    target?: string;
}
export const StyledLink = styled.a<LinkProps>`
    text-decoration: none;
    display: flex;
`