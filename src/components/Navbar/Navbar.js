import React from "react"
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon } from "./Navbar.elements"


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        ULTRA
                        </NavLogo>
                    <MobileIcon>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

