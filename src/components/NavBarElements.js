import styled from "styled-components"
import { GiDragonBalls } from "react-icons/gi"
import { Link } from "gatsby"
import { bplg, nearBlack } from "../const/constants"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#fff"
      : "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100% )"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: ${bplg}) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
    transition: 0.8s all ease;
  }
`

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`

export const NavLogo = styled(Link)`
  color: ${nearBlack};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

export const NavIcon = styled(GiDragonBalls)`
  margin: 0 0.5rem 0 2rem;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${bplg}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: ${bplg}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2 ease;
    background: #fff;
  }
`
export const NavItem = styled.li`
  padding: 0;
  height: 80px;

  @media screen and (max-width: ${bplg}) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: ${nearBlack};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Ubuntu", sans-serif;

  @media screen and (max-width: ${bplg}) {
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