import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

import { TitleText } from "../styledComponents";
import { useRef, useState } from "react";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftMenuContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SideMenuContainer = styled.span<{isOpen?:boolean}>`
    position: fixed;
    top: 0;
    right: ${({isOpen}) => isOpen ? '0' : '250px'};
    transition: right 1.5s ease-in-out;
    background-color: black;
    height: 100vh;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

const StyledMenuButton = styled.button`
    background-color: transparent;
    border: 0;
    color: aliceblue;
`

export default function HeaderMobile(){
    const [menu, setMenu] = useState<boolean>(false)
    const menuRef = useRef<HTMLElement | null>(null)

    return <HeaderContainer>
        <LeftMenuContainer>
            <ImportantDevicesIcon/>
            <TitleText>
                Marllon
            </TitleText>
        </LeftMenuContainer>
        <StyledMenuButton onClick={() => setMenu(prev => !prev)}>
            <MenuIcon/>
        </StyledMenuButton>
        {
            menu ? <SideMenuContainer isOpen={menu}>
                <h1>oi</h1>
                <h1>oi</h1>
                <h1>oi</h1>
                <h1>oi</h1>
                <h1>oi</h1>
            </SideMenuContainer> : <></>
        }
    </HeaderContainer>
}