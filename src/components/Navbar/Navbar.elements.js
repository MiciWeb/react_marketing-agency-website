import styled from "styled-components"
import { Container } from "../../globalStyles"
import { FaMagento } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Nav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
background: #101522;
height: 80px;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index:999;
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`
export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem
`

export const MobileIcon = styled.div`
display: none;

@media only screen and (max-width:960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`