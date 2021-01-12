import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { GiDragonBalls } from "react-icons/gi"
import { IconContext } from "react-icons/lib"
import styled from "styled-components"
import { Link } from "gatsby"
import * as cssVars from "../const/constants"

const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#000"
      : "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100% )"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: ${cssVars.breakPointL}) {
    background: ${({ click }) =>
      click
        ? "#000"
        : "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100% )"};
    transition: 0.8s all ease;
  }
`

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`

const NavLogo = styled(Link)`
  color: ${cssVars.nearWhite};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 3px;
  font-weight: 300;
`

const NavIcon = styled(GiDragonBalls)`
  margin: 0 1rem 0 2rem;
  color: ${cssVars.nearWhite};
`

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${cssVars.breakPointL}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${cssVars.breakPointL}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2 ease;
    background: #000;
    font-size: 1.5rem;
  }
`
const NavItem = styled.li`
  padding: 0;
  height: 80px;

  @media screen and (max-width: ${cssVars.breakPointL}) {
    width: 100%;
  }
`

const NavLinks = styled(Link)`
  align-items: center;
  color: ${cssVars.nearWhite};
  display: flex;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  height: 100%;
  padding: 0.5rem 1rem;
  text-decoration: none;

  @media screen and (max-width: ${cssVars.breakPointL}) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
  &:hover {
    color: #ff4040;
    transition: all 0.3 ease;
  }
`

const NavBar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => {
    setClick(!click)
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
              <IconContext.Provider value={{ color: "white", size: "40px" }}>
                <NavIcon />
              </IconContext.Provider>
              Light by Dan
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              <IconContext.Provider value={{ color: "white", size: "30px" }}>
                {click ? <FaTimes /> : <FaBars />}
              </IconContext.Provider>
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks activeStyle={{ fontWeight: 700 }} to="/">
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks activeStyle={{ fontWeight: 700 }} to="/prices/">
                  About shoots
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks activeStyle={{ fontWeight: 700 }} to="/nightlife/">
                  Nightlife
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks activeStyle={{ fontWeight: 700 }} to="/gallery/">
                  Portrait gallery
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar
