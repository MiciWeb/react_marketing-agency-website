import React, { useState, useEffect } from "react"
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem, NavItemBtn, NavBtnLink } from "./Navbar.elements"
import { IconContext } from "react-icons/lib"
import { Button } from "../../globalStyles";


const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => {
        setClick(!click)
    }
    
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener("resize", showButton)

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <NavIcon />
                        BLOG
                        </NavLogo>
                        
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/login">Login</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/register">
                                        <Button primary>Register</Button>
                                    </NavBtnLink>
                                ) : (
                                        <NavBtnLink to="/register">
                                            <Button fontBig primary>
                                                Register
                                        </Button>
                                        </NavBtnLink>
                                    )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider >
        </>
    )
}

export default Navbar

