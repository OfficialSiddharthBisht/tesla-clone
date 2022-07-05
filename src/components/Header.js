import React from "react";
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header(){
    return (
        <Container>
            <a>
                <img src = "/images/logo.svg" alt = "" />
            </a>
            <Menu>
                <a href = "#">Model S</a>
                <a href = "#">Model 3</a>
                <a href = "#">Model X</a>
                <a href = "#">Model Y</a>  
            </Menu>
            <RightMenu>
            <a href = "#">Shop</a>
            <a href = "#">Tesla Account</a>
            <CustomMenu />
            </RightMenu>
            <BurgerNav>
                <CloseWrapper>
                    <CustomClose />
                </CloseWrapper>
                <li><a href = "#">Existing Inventory</a></li>
                <li><a href = "#">Used Inventory</a></li>
                <li><a href = "#">Used Inventory</a></li>
                <li><a href = "#">Trade-in</a></li>
                <li><a href = "#">Test Drive</a></li>
                <li><a href = "#">Insurance</a></li>
                <li><a href = "#">Cybertruck</a></li>
                <li><a href = "#">Roadster</a></li>
                <li><a href = "#">Semi</a></li>
                <li><a href = "#">Charging</a></li>
                <li><a href = "#">Powerwall</a></li>
                <li><a href = "#">Commercial Energy</a></li>
                <li><a href = "#">Utilities</a></li>
                <li><a href = "#">Find Us</a></li>
                <li><a href = "#">Support</a></li>
                <li><a href = "#">Investor Relations</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header;
let Container = styled.div`
    min-height : 60px;
    position : fixed;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 0 20px; 
    top : 0;
    left : 0;
    right : 0;
    z-index : 1;
`
let Menu = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    flex : 1;
    a{
        font-weight : 600;
        text-transform : uppercase;
        padding : 0 10px;
        flex-wrap : nowrap;
    }
    @media(max-width : 768px){
        display : none;
    }
`
let RightMenu = styled.div`
    display : flex;
    align-items : center;
    a {
        font-weight : 600;
        text-transform : uppercase;
        margin-right: 10px;
    }
`
let CustomMenu = styled(MenuIcon)`
    cursor : pointer;
`
let BurgerNav = styled.div`
    position : fixed;
    top : 0;
    bottom : 0;
    right : 0;
    background : white;
    width : 300px;
    z-index : 100;
    list-style : none;
    padding : 20px;
    display : flex;
    flex-direction : column;
    text-align :start;
    
    li{
        padding : 9px 0;
        border-bottom :1px solid rgba(0,0,0,0.2);
    }
    a{
        font-weight : 600;
    }
`
let CustomClose = styled(CloseIcon)`
    top : 0;
    right : 0;
`
let CloseWrapper = styled.div`
    display : flex;
    justify-content : flex-end;
`