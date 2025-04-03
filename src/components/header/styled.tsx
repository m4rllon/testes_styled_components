import styled from "styled-components";

// Textos:
export const TitleText = styled.h1`
    margin-inline: 16px;
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
`

interface ParagraphProps {
    colorDecorate?: string;
}
export const ParagraphText = styled.p<ParagraphProps>`
    font-size: 16px;
    font-weight: 700;
    color: ${({theme, colorDecorate}) => (colorDecorate) ? colorDecorate : theme.colors.text};
`

// Containers:
export const TextAndIconContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`

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

    @media (max-width: ${({theme}) => theme.sizes.mobile}) {
        visibility: hidden;
        width: 0%;
    }
`

export const MenuContainer = styled.menu`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${({theme}) => theme.sizes.mobile}) {
        visibility: hidden;
        margin: 0%;
        width: 0%;
    }
`

export const NavMobileContainer = styled.div`
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 16px
`

// Outras tags:
interface LinkProps {
    href: string;
    target?: string;
}
export const StyledLink = styled.a<LinkProps>`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`