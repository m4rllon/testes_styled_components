import { HeaderContainer, 
    NavContainer, 
    ParagraphText, 
    TitleText,
    StyledLink } from "./styled"
import theme from "../../styles/theme"


export default function Header(){
    return <HeaderContainer>
        <TitleText>
            Marllon
        </TitleText>
        <NavContainer>
            <StyledLink href={""}>
                <ParagraphText colorDecorate="theme.colors.textDecorate">#</ParagraphText>
                <ParagraphText>Home</ParagraphText>
            </StyledLink>
            <StyledLink href="">
                <ParagraphText colorDecorate="theme.colors.textDecorate">#</ParagraphText>
                <ParagraphText>Works</ParagraphText>
            </StyledLink>
            <StyledLink href="">
                <ParagraphText colorDecorate="theme.colors.textDecorate">#</ParagraphText>
                <ParagraphText>About-me</ParagraphText>
            </StyledLink>
            <StyledLink href="">
                <ParagraphText colorDecorate="theme.colors.textDecorate">#</ParagraphText>
                <ParagraphText>Contacts</ParagraphText>
            </StyledLink>
        </NavContainer>
    </HeaderContainer>
}