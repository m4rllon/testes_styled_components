import { HeaderContainer, 
    NavContainer, 
    ParagraphText, 
    TitleText,
    StyledLink,
    MenuContainer,
    TextAndIconContainer } from "./styled"

import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import TagIcon from '@mui/icons-material/Tag';

export default function Header(){
    return <>
        <HeaderContainer>
            <TextAndIconContainer>
                <ImportantDevicesIcon/>
                <TitleText>
                    Marllon
                </TitleText>
            </TextAndIconContainer>
            <NavContainer>
                <StyledLink href={""}>
                    <TagIcon/>
                    <ParagraphText>Home</ParagraphText>
                </StyledLink>
                <StyledLink href="">
                    <TagIcon/>
                    <ParagraphText>Works</ParagraphText>
                </StyledLink>
                <StyledLink href="">
                    <TagIcon/>
                    <ParagraphText>About-me</ParagraphText>
                </StyledLink>
                <StyledLink href="">
                    <TagIcon/>
                    <ParagraphText>Contacts</ParagraphText>
                </StyledLink>
            </NavContainer>
        </HeaderContainer>
    </> 
}