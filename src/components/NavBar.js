import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  Nav,
  NavLogo,
  NavBarContainer,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavBarElements"

const NavBar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => {
    setClick(!click)
    console.log(click)
  }

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavBarContainer>
            <NavLogo to="/">
              <NavIcon />
              Light by Dan
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/aboutShoots/">About Shoots</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/shootPrices/">Prices</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/meetDan/">Meet Dan</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/exhibitions/">Exhibitions</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/testimonials/">Testimonials</NavLinks>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar
